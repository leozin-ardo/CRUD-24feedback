import { Request, Response } from "types/http";
import { IService } from "types/IService";


export default class Controller {
    public service: IService;

    constructor(service: IService) {
        this.service = service;
    }

    create = async (request: Request, response: Response) => {
        return this.service.create(request.body, response);
    };

    update = async (request: Request, response: Response) => {
        return this.service.update(request.body, response);
    };

    delete = async (request: Request, response: Response) => {
        const { params } = <any>request;
        return this.service.delete(params.id, response);
    };

    list = async (request: Request, response: Response) => {
        return this.service.list(response);
    };

    read = async (request: Request, response: Response) => {
        const { params } = <any>request;
        return this.service.read(params?.id, response);
    };
}
