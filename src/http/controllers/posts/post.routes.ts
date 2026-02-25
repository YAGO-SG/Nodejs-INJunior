import type { FastifyInstance } from "fastify";
import { createPost } from "./createPost.controller.js";
import { listPosts } from "./listPosts.controller.js";
import { userPosts } from "./user-posts.controller.js";

export async function postRoutes(app: FastifyInstance) {
    app.post('/', createPost);
    app.get('/list', listPosts);
    app.get('/list/:authorId', userPosts)
}