import type { FastifyInstance } from "fastify";
import { usersRoutes } from "./users/user.routes.js";
import { postRoutes } from "./posts/post.routes.js";

export async function appRoutes(app: FastifyInstance) {
    app.register(usersRoutes, { prefix: '/users'})

    app.register(postRoutes, { prefix: '/posts'})
}