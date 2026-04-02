import Fastify from 'fastify';
import cors from '@fastify/cors';
import 'dotenv/config'
import { userRoutes } from './routes.js';

export const app = Fastify({ logger: true })

app.register(cors, {
    origin: '*', // You can restrict this to 'http://localhost:3000' in production
});

app.register(userRoutes);

const start = async () => {
    try {
        await app.listen({ port: 3333 });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();