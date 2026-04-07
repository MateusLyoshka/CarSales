import bcrypt from "bcryptjs";
import { authenticate } from "../middleware.js";
import jwt from 'jsonwebtoken';
import type { FastifyInstance } from 'fastify';
import { prisma } from "../../lib/prisma.js";
import { type RegisterSchemaType, type LoginSchemaType, RegisterSchema } from "../schemas/userSchema.js";
import { error } from "node:console";
import z from "zod";

type User = {
    id: number,
    name: string,
    email: string,
    password: string
}

export async function userRoutes(app: FastifyInstance) {
    const users: User[] = []

    app.get('/', async () => {
        return { users };
    });

    app.post('/register', async (request, reply) => {
        const result = RegisterSchema.safeParse(request.body);
        if (!result.success) {
            const errorTree = z.treeifyError(result.error);
            return reply.status(400).send({
                message: "Invalid data",
                error: errorTree,
            })
        }
        const { name, email, password, confirmpassword } = result.data;
        const userExists = await prisma.user.findUnique({ where: { email } })
        if (userExists) {
            return reply.status(400).send({ message: "Email already in use" })
        }
        const passwordsMatch = password === confirmpassword
        if (!passwordsMatch) {
            return reply.status(400).send({ message: "Passwords do not match" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        try {
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                },
            });

            return reply.status(201).send({
                message: "User created successfully!",
                id: user.id,
            });
        } catch (error) {
            return reply.status(500).send({
                message: "Failed to create user",
                error: error
            });
        }
    });

    app.post('/login', async (request, reply) => {
        const { email, password } = request.body as LoginSchemaType
        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
            return reply.status(401).send({ message: 'Invalid credentials' })
        }
        const isCorrectPassword = await bcrypt.compare(password, user.password)
        if (!isCorrectPassword) {
            return reply.status(401).send({ message: 'Invalid credentials' })
        }
        console.log(process.env.JWT_SECRET as string)
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string, {
            expiresIn: "1h",
        });

        return { token };
    })

    app.get('/me', { onRequest: [authenticate] }, async (request, reply) => {
        return request.user
    })
}

