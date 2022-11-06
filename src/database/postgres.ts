import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const postgresConnection = new DataSource({
    type: "postgres",
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ["src/entities/*.ts"],
    synchronize: true,
    namingStrategy: new SnakeNamingStrategy(),
});
