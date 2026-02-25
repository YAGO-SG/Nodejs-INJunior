import { prisma } from "@/libs/prisma.js";
import type { FastifyRequest, FastifyReply } from "fastify";

export async function deletePost(req: FastifyRequest, rep: FastifyReply) {
    try {
        const { id } = req.params;

        const deletePost = await prisma.post.delete({
            where: {
                id: parseInt(id)
            }
        })
        
        rep.status(200).send(deletePost)

    } catch (error) {
        rep.status(400).send(error)
    }
}