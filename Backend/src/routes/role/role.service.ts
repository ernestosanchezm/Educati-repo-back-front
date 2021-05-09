import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';

@Injectable()
export class RoleService {
    constructor(
        @InjectModel(Role)
        private roleModel: typeof Role,
    ) { }

    create(role: Role) {
        return this.roleModel.create(role);
    }

    update(role: Role, id: string) {
        return this.roleModel.update(role,{
            where: {
                id
            }
        })
    }

    async findAll(): Promise<Role[]> {
        return this.roleModel.findAll();
    }

    findOne(id: string): Promise<Role> {
        return this.roleModel.findOne({
            where: {
                id
            }
        });
    }

    async remove(id: string): Promise<void> {
        const role = await this.findOne(id);
        await role.destroy();
    }
}