import type { FastifyReply, FastifyRequest } from "fastify"
import jwt from 'jsonwebtoken';

interface JWTUser { id: number, email: string }

declare module 'fastify' {
    export interface FastifyRequest {
        user?: JWTUser,
    }
}

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    try {
        const token = request.headers.authorization?.replace("Bearer ", "")

        if (!token) {
            throw new Error("Token not found")
        }

        const decodedJwt = jwt.verify(token, process.env.JWT_SECRET as string) as JWTUser
        request.user = decodedJwt

    } catch (error) {
        reply.status(401).send({ message: "Authentication failed" })
    }
}