import { Response } from "./http";

export interface IService {
    create: (data: any, response: Response) => Promise<Response>;
    update: (data: any, response: Response) => Promise<Response>;
    delete: (id: string, response: Response) => Promise<Response>;
    list: (response: Response) => Promise<Response>;
    read: (id: string, response: Response) => Promise<Response>;
}
