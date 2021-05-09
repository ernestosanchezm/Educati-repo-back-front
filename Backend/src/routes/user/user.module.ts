import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { UserController } from './user.controller';
import { User } from './user.model';
import { SeedUser } from './user.seed';
import { UserService } from './user.service';

@Module({
    imports: [
        SequelizeModule.forFeature([User]),
        SeederModule.forFeature([SeedUser])
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule { }