import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { UserCourseService } from "./user-course.service";
import { Response } from 'express';

@Controller('user-course')
export class UserCourseController {

    constructor(
        private userCourseService: UserCourseService
    ){}
    @Get()
    findAll(@Res() rs: Response) {
        return this.userCourseService.findAll()
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Get(':id')
    findOne(@Param('id') id, @Res() rs: Response) {
        return this.userCourseService.findOne(id)
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Post(':id')
    create(@Body() newUsersCourse, @Param('id') id, @Res() rs: Response) {
        return this.userCourseService.remove(id)
        .then(response => {
            return this.userCourseService.bulkCreate(newUsersCourse)
            .then(r => {
                rs.status(201).json(r);
            })
            .catch(e => {
                rs.status(400).json(e);
            })
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Put(':id')
    update(@Param('id') id, @Body() user, @Res() rs: Response) {
        return this.userCourseService.update(user, id)
        .then(r => {
            if (r[0] == 1) {
                rs.status(200).json({status: 'success'});
            } else {
                rs.status(400).json({status: 'error', message: 'No se pudo actualizar el Curso'});
            }
        })
        .catch(e => {
            rs.status(400).json({status: 'error', message: e});
        })
    }

    @Delete(':id')
    delete(@Param('id') id, @Res() rs: Response) {
        return this.userCourseService.remove(id)
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }
}