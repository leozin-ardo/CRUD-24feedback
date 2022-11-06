require("dotenv").config();
import { postgresConnection } from "database/postgres";
import Fastify from "fastify";
import readRoutes from "helpers/readRoutes";

const serverOptions = {
    port: Number(process.env.PORT) || 3000,
};

const server = Fastify();

readRoutes(server);

postgresConnection
    .initialize()
    .then(() => {
        server.listen(serverOptions, (err, address) => {
            if (err) {
                server.log.error(err);
                process.exit(1);
            }

            console.log(`server listening on ${address}`);
        });
    })
    .catch((err) => console.log(err));
