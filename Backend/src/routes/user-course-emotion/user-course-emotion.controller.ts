import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { UserCourseEmotionService } from "./user-course-emotion.service";
import { Response } from 'express';

@Controller('user-course-emotion')
export class UserCourseEmotionController {

    constructor(
        private userCourseEmotionService: UserCourseEmotionService
    ){}
    @Get()
    findAll(@Res() rs: Response) {
        return this.userCourseEmotionService.findAll()
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

    @Post()
    sendImage(@Body() userCourse, @Res() rs: Response) {
        return this.userCourseEmotionService.sendImage(userCourse)
        /*.then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })*/
    }

    /* @Put(':id')
    update(@Param('id') id, @Body() user, @Res() rs: Response) {
        return this.userCourseEmotionService.update(user, id, note)
        .then(r => {
            if (r[0] == 1) {
                rs.status(200).json({status: 'success'});
            } else {
                rs.status(400).json({status: 'error', message: 'No se pudo actualizar'});
            }
        })
        .catch(e => {
            rs.status(400).json({status: 'error', message: e});
        })
    } */

    @Delete(':id')
    delete(@Param('id') id, @Res() rs: Response) {
        return this.userCourseEmotionService.remove(id)
        .then(r => {
            rs.status(200).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }
}