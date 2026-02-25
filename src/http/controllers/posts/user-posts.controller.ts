import { prisma } from "@/libs/prisma.js";
import type { FastifyRequest, FastifyReply } from "fastify";


export async function userPosts( req: FastifyRequest, rep: FastifyReply) {
    try {
        const { authorId } = req.params;
        
        const userPosts = await prisma.post.findMany({
            where: {
                authorId: parseInt(authorId),
            }
        })

    return rep.status(200).send(userPosts)

    } catch (error) {
        rep.status(400).send(error)
    }

}