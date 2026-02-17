import Fastify from 'fastify';
import bcrypt from 'bcryptjs';

const app = Fastify({ logger: true })

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

const start = async () => {
    try {
        await app.listen({ port: 3000 });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();