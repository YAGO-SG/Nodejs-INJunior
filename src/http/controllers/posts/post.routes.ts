import type { FastifyInstance } from "fastify";
import { createPost } from "./createPost.controller.js";
import { listPosts } from "./listPosts.controller.js";

export async function postRoutes(app: FastifyInstance) {
    app.post('/', createPost);
    app.get('/list', listPosts);
}