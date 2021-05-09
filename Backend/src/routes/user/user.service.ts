import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
const md5 = require('md5');

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) { }

    create(user: User) {
        return this.userModel.create(user);
    }

    update(user: User, id: string) {
        return this.userModel.update(user,{
            where: {
                id
            }
        })
    }

    updatePassword(user: User, id: string) {
        user.password = md5(user.password);
        return this.userModel.update(user,{
            where: {
                id
            }
        })
    }

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    findOne(id: string): Promise<User> {
        return this.userModel.findOne({
            where: {
                id
            }
        });
    }

    async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
    }
}