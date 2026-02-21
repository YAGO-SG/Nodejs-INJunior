import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '@/libs/prisma.js'

export async function createPost(req: FastifyRequest, res: FastifyReply) {
    const inputValidation = z.object({
        title: z.string().trim().min(1).max(100),
        content: z.string().min(1).max(250),
        authorId: z.number()
    })

    const { title, content, authorId } = inputValidation.parse(req.body)

    const post = await prisma.post.create({
        data: {
            title,
            content,
            authorId
        },
    });

    return res.status(201).send(post)
}

