import { UserService } from "./user.service";
import { Response } from 'express';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(rs: Response): Promise<void>;
    findOne(id: any, rs: Response): Promise<void>;
    create(newUser: any, rs: Response): Promise<void>;
    update(id: any, user: any, rs: Response): Promise<void>;
    delete(id: any, rs: Response): Promise<void>;
}
