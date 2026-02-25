import { prisma } from "@/libs/prisma.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'

export async function patchPost(req: FastifyRequest, rep: FastifyReply) {
    try {
        const { id } = req.params;

        const patchPostBodySchema = z.object({
            title: z.string().trim().min(1).max(100),
            content: z.string().min(1).max(250),
        })

        const { title, content, } = patchPostBodySchema.parse(req.body)

        const updatePost = await prisma.post.update({
            where: {
                id: parseInt(id)
            },

            data: {
                title,
                content,
            }
        })
        
        rep.status(200).send(updatePost)

    } catch (error) {
        rep.status(400).send(error)
    }
}