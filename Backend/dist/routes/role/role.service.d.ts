import { Role } from './role.model';
export declare class RoleService {
    private roleModel;
    constructor(roleModel: typeof Role);
    create(role: Role): Promise<Role>;
    update(role: Role, id: string): Promise<[number, Role[]]>;
    findAll(): Promise<Role[]>;
    findOne(id: string): Promise<Role>;
    remove(id: string): Promise<void>;
}
