import type { FastifyInstance } from "fastify";
import { register } from "./register.controller.js";
import { listUsers } from "./listUsers.controller.js";

export async function usersRoutes(app: FastifyInstance) {
    app.post('/', register),
    app.get('/list', listUsers)
}