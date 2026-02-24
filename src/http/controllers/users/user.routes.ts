import type { FastifyInstance } from "fastify";
import { register } from "./register.controller.js";
import { listUsers } from "./listUsers.controller.js";
import { deleteUser } from "./delete-user.controller.js";
import { patchUser } from "./patch-user.controller.js";

export async function usersRoutes(app: FastifyInstance) {
    app.post('/', register);
    app.get('/list', listUsers);
    app.delete('/delete/:id', deleteUser);
    app.patch('/update/:id', patchUser);
}