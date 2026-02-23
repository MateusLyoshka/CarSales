import "dotenv/config"

export const config = {
    JWT_SECRET: process.env.JWT_SECRET,
    POSTGRES: process.env.DATABASE_URL
}

Object.entries(config).forEach(([key, value]) => {
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
});