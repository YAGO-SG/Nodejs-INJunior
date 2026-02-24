import { prisma } from "@/libs/prisma.js";
import type { FastifyRequest, FastifyReply } from "fastify";


export async function listOneUser( req: FastifyRequest, rep: FastifyReply) {
    
    const { id } = req.params;
    
    const users = await prisma.user.findUnique({
        where: {
            id: parseInt(id),
        }
    })

    return rep.status(200).send(users)
}