import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserCourseEmotionController } from './user-course-emotion.controller';
import { UserCourseEmotion } from './user-course-emotion.model';
import { UserCourseEmotionService } from './user-course-emotion.service';

@Module({
    imports: [
        SequelizeModule.forFeature([UserCourseEmotion])
    ],
    providers: [UserCourseEmotionService],
    controllers: [UserCourseEmotionController],
})
export class UserCourseEmotionModule { }