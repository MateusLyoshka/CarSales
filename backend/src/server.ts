import Fastify from 'fastify';
import 'dotenv/config'
import { userRoutes } from './routes.js';

export const app = Fastify({ logger: true })

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