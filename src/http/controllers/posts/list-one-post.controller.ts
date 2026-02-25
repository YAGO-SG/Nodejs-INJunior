import { prisma } from "@/libs/prisma.js";
import type { FastifyRequest, FastifyReply } from "fastify";


export async function listOnePost( req: FastifyRequest, rep: FastifyReply) {
    
    const { id } = req.params;
    
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(id),
        }
    })

    return rep.status(200).send(post)
}