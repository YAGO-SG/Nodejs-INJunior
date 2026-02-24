import { prisma } from "@/libs/prisma.js";
import type { FastifyRequest, FastifyReply } from "fastify";

export async function deleteUser(req: FastifyRequest, rep: FastifyReply) {
    try {
        const { id } = req.params;

        const deleteUser = await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        })
        
        rep.status(200).send(deleteUser)

    } catch (error) {
        rep.status(200).send(error)
    }
}