import bcrypt from "bcryptjs";
import { app } from "./server.js";
import { authenticate } from "./middleware.js";
import jwt from 'jsonwebtoken';

interface User {
    id: number
    name: string
    email: string
    password: string
}

interface RegisterRequest {
    name: string
    email: string
    password: string
}

interface LoginRequest {
    email: string
    password: string
}

const users: User[] = []

app.get('/', async () => {
    return { users };
});

app.post('/register', async (request, reply) => {
    const { name, email, password } = request.body as RegisterRequest

    const user = users.find(u => u.email === email)
    if (user) {
        return reply.status(400).send({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = { id: users.length + 1, name, email, password: hashedPassword }
    users.push(newUser)

    return reply.status(201).send({ message: "User successfully created" })
});

app.post('/login', async (request, reply) => {
    const { email, password } = request.body as LoginRequest

    const user = users.find(u => u.email === email)
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

const start = async () => {
    try {
        await app.listen({ port: 3000 });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};