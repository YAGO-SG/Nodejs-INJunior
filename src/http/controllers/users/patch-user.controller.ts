import { prisma } from "@/libs/prisma.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'
import { hash } from "bcryptjs";
import { env } from "@/env/index.js";

export async function patchUser(req: FastifyRequest, rep: FastifyReply) {
    try {
        const { id } = req.params;

        const patchUserBodySchema = z.object({
            name: z.string().trim().min(1).max(100),
            email: z.email().max(100),
            password: z.string().min(8).max(100),
            photo: z.string(),
        })

        const { name, email, password, photo} = patchUserBodySchema.parse(req.body)

        const passwordHash = await hash(password, env.HASH_SALT_ROUNDS)

        const updateUser = await prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                email,
                password: passwordHash,
                photo,
            }
        })
        
        rep.status(200).send(updateUser)

    } catch (error) {
        rep.status(200).send(error)
    }
}