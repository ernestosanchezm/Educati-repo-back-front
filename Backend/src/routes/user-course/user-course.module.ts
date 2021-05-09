import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserCourseController } from './user-course.controller';
import { UserCourse } from './user-course.model';
import { UserCourseService } from './user-course.service';

@Module({
    imports: [
        SequelizeModule.forFeature([UserCourse])
    ],
    providers: [UserCourseService],
    controllers: [UserCourseController],
})
export class UserCourseModule { }