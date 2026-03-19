import Fastify from 'fastify';
import 'dotenv/config'

export const app = Fastify({ logger: true })

const start = async () => {
    try {
        await app.listen({ port: 3000 });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();