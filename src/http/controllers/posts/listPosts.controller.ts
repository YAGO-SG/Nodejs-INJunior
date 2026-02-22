import { prisma } from "@/libs/prisma.js";
import type { FastifyRequest, FastifyReply } from "fastify";

export async function listPosts(_req: FastifyRequest, rep: FastifyReply) {
    const posts = await prisma.post.findMany();

    return rep.status(200).send(posts)
}