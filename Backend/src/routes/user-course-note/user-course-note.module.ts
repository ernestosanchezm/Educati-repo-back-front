import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserCourseNoteController } from './user-course-note.controller';
import { UserCourseNote } from './user-course-note.model';
import { UserCourseNoteService } from './user-course-note.service';

@Module({
    imports: [
        SequelizeModule.forFeature([UserCourseNote])
    ],
    providers: [UserCourseNoteService],
    controllers: [UserCourseNoteController],
})
export class UserCourseNoteModule { }