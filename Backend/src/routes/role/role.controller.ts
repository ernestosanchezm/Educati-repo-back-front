import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { RoleService } from "./role.service";
import { Response } from 'express';

@Controller('role')
export class RoleController {

    constructor(
        private roleService: RoleService
    ){}
    @Get()
    findAll(@Res() rs: Response) {
        return this.roleService.findAll()
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Get(':id')
    findOne(@Param('id') id, @Res() rs: Response) {
        return this.roleService.findOne(id)
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    /* @Post()
    create(@Body() newRole, @Res() rs: Response) {
        return this.roleService.create(newRole)
        .then(r => {
            rs.status(201).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Put(':id')
    update(@Param('id') id, @Body() role, @Res() rs: Response) {
        return this.roleService.update(role, id)
        .then(r => {
            if (r[0] == 1) {
                rs.status(200).json({status: 'success'});
            } else {
                rs.status(400).json({status: 'error', message: 'No se pudo actualizar el Role'});
            }
        })
        .catch(e => {
            rs.status(400).json({status: 'error', message: e});
        })
    }

    @Delete(':id')
    delete(@Param('id') id, @Res() rs: Response) {
        return this.roleService.remove(id)
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    } */
}