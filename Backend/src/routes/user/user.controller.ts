import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { Response } from 'express';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ){}
    @Get()
    findAll(@Res() rs: Response) {
        return this.userService.findAll()
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Get(':id')
    findOne(@Param('id') id, @Res() rs: Response) {
        return this.userService.findOne(id)
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Post()
    create(@Body() newUser, @Res() rs: Response) {
        return this.userService.create(newUser)
        .then(r => {
            rs.status(201).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Put(':id')
    update(@Param('id') id, @Body() user, @Res() rs: Response) {
        return this.userService.update(user, id)
        .then(r => {
            if (r[0] == 1) {
                rs.status(200).json({status: 'success'});
            } else {
                rs.status(400).json({status: 'error', message: 'No se pudo actualizar el Usuario'});
            }
        })
        .catch(e => {
            rs.status(400).json({status: 'error', message: e});
        })
    }

    @Delete(':id')
    delete(@Param('id') id, @Res() rs: Response) {
        return this.userService.remove(id)
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }
}