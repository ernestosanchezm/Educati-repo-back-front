import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { UserCourseNoteService } from "./user-course-note.service";
import { Response } from 'express';

@Controller('user-course-note')
export class UserCourseNoteController {

    constructor(
        private userCourseNoteService: UserCourseNoteService
    ){}
    @Get()
    findAll(@Res() rs: Response) {
        return this.userCourseNoteService.findAll()
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Get(':id')
    findOne(@Param('id') id, @Res() rs: Response) {
        return this.userCourseNoteService.findOne(id)
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Post()
    create(@Body() newUserCourseNote, @Res() rs: Response) {
        return this.userCourseNoteService.create(newUserCourseNote)
        .then(r => {
            rs.status(201).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Put(':id')
    update(@Param('id') id, @Body() user, @Res() rs: Response) {
        return this.userCourseNoteService.update(user, id)
        .then(r => {
            if (r[0] == 1) {
                rs.status(200).json({status: 'success'});
            } else {
                rs.status(400).json({status: 'error', message: 'No se pudo actualizar la nota'});
            }
        })
        .catch(e => {
            rs.status(400).json({status: 'error', message: e});
        })
    }

    @Delete(':id')
    delete(@Param('id') id, @Res() rs: Response) {
        return this.userCourseNoteService.remove(id)
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }
}