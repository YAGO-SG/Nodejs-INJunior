import { prisma } from '@/libs/prisma.js';
import type { FastifyRequest , FastifyReply } from 'fastify';

export async function listUsers(request: FastifyRequest, reply: FastifyReply) {
    const users = await prisma.user.findMany();

    return reply.status(200).send(users)
}