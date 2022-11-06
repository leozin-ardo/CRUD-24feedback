import { FastifySchema } from "fastify";
import Joi from "joi";

export const createCompany: FastifySchema = {
    body: Joi.object({
        name: Joi.string().max(50).required(),
        foundation_date: Joi.date().required(),
    }).required(),
};
