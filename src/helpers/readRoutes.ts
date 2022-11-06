import fs from "fs";
import path from "path";
import { FastifyInstance, RouteOptions } from "fastify";
import generateRoutes from "./generateRoutes";
import Controller from "../controllers";
import Service from "../services";

const entityPath = path.join(__dirname, "../entities");

const entitiyFiles = fs.readdirSync(entityPath);

export default (server: FastifyInstance) => {
    entitiyFiles.forEach((file) => {
        const prefix = file.split(".")[0].toLowerCase();
        const entity = require(`${entityPath}/${file}`).default;
        const routes = generateRoutes(new Controller(new Service(entity)));

        routes.forEach((route) => {
            route.url = `/${prefix}${route.url}`;
            server.route(route);
        });
    });
};
