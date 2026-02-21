import type { FastifyInstance } from "fastify";
import { createPost } from "./createPost.controller.js";

export async function postRoutes(app: FastifyInstance) {
    app.post('/', createPost)
}