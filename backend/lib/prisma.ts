import "dotenv/config";
import pg from "pg"; // Adicione essa importação
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";

// 1. Criamos o Pool do Postgres (o driver real)
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
});

// 2. Criamos o adaptador do Prisma usando esse pool
const adapter = new PrismaPg(pool);

// 3. Instanciamos o cliente
const prisma = new PrismaClient({ adapter });

export { prisma };