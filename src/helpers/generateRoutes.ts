import Controller from "controllers";
import { RouteOptions } from "fastify";

export default (Controller: Controller): RouteOptions[] => {
    return [
        {
            method: "GET",
            url: "/",
            handler: Controller.list,
        },
        {
            method: "GET",
            url: "/:id",
            handler: Controller.read,
        },
        {
            method: "POST",
            url: "/",
            handler: Controller.create,
        },
        {
            method: "PUT",
            url: "/:id",
            handler: Controller.update,
        },
        {
            method: "DELETE",
            url: "/:id",
            handler: Controller.delete,
        },
    ];
};
