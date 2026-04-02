import bcrypt from "bcryptjs";
import { authenticate } from "../middleware.js";
import jwt from 'jsonwebtoken';
import type { FastifyInstance } from 'fastify';
import { prisma } from "../../lib/prisma.js";
import type { RegisterSchemaType, LoginSchemaType } from "../schemas/userSchema.js";

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
        const { name, email, password, confirmpassword } = request.body as RegisterSchemaType
        const userExists = await prisma.user.findUnique({ where: { email } })
        const passwordsMatch = password === confirmpassword
        if (!passwordsMatch) {
            return reply.status(400).send({ message: "Passwords do not match" })
        }
        if (userExists) {
            return reply.status(400).send({ message: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })
        return reply.status(201).send({
            message: "Usuário criado com sucesso!",
            id: user.id
        })
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

