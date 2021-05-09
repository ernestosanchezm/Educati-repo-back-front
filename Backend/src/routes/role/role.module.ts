import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { RoleController } from './role.controller';
import { Role } from './role.model';
import { SeedRol } from './role.seed';
import { RoleService } from './role.service';

@Module({
    imports: [
        SequelizeModule.forFeature([Role]),
        SeederModule.forFeature([SeedRol])
    ],
    providers: [RoleService],
    controllers: [RoleController],
})
export class RoleModule { }