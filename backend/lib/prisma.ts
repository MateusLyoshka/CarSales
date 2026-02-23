import { config } from '../src/config/config.js'
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";

const pool = new pg.Pool({
    connectionString: config.POSTGRES
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

export { prisma };