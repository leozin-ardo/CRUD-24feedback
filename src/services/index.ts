import { postgresConnection } from "database/postgres";
import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { Response } from "types/http";
import { IService } from "types/IService";

export default class Service implements IService {
    repository: Repository<ObjectLiteral>;

    constructor(entitiy: EntityTarget<ObjectLiteral>) {
        this.repository = postgresConnection.getRepository(entitiy);
    }

    create = async (company: any, response: Response) => {
        try {
            const create = await this.repository.save(company);
            return response.status(201).send({
                id: create?.id,
            });
        } catch (err) {
            return response.status(500).send(err);
        }
    };

    update = async (company: any, response: Response) => {
        try {
            const update = await this.repository.update(company.id, company);

            if (update.affected) {
                return response.status(201).send({
                    message: `Company ${company.id} updated successfully!`,
                });
            } else {
                return response.status(204).send({
                    message: `Company ${company.id} not updated!`,
                });
            }
        } catch (err) {
            return response.status(500).send(err);
        }
    };

    delete = async (id: string, response: Response) => {
        try {
            const deleted = await this.repository.delete(id);

            if (deleted.affected) {
                return response.status(204).send({
                    message: `Company ${id} deleted successfully!`,
                });
            } else {
                return response
                    .status(404)
                    .send({ message: "Company not deleted!" });
            }
        } catch (err) {
            return response.status(500).send(err);
        }
    };

    list = async (response: Response) => {
        try {
            const companies = await this.repository.find();

            if (companies.length == 0) {
                return response
                    .status(204)
                    .send({ message: "No companies found!" });
            }

            return response.send(companies);
        } catch (err) {
            throw err;
        }
    };

    read = async (id: string, response: Response) => {
        try {
            const company = await this.repository.findOne({ where: { id } });

            return response.send(company);
        } catch (err) {
            return response.status(500).send(err);
        }
    };
}
