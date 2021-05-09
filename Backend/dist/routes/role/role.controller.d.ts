import { RoleService } from "./role.service";
import { Response } from 'express';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    findAll(rs: Response): Promise<void>;
    findOne(id: any, rs: Response): Promise<void>;
}
