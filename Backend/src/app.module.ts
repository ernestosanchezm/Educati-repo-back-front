import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './routes/user/user.model';
import { UserModule } from './routes/user/user.module';
import { Role } from './routes/role/role.model';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { RoleModule } from './routes/role/role.module';
import { Course } from './routes/course/course.model';
import { CourseModule } from './routes/course/course.module';
import { UserCourse } from './routes/user-course/user-course.model';
import { UserCourseModule } from './routes/user-course/user-course.module';
import { UserCourseNote } from './routes/user-course-note/user-course-note.model';
import { UserCourseNoteModule } from './routes/user-course-note/user-course-note.module';
import { UserCourseEmotionModule } from './routes/user-course-emotion/user-course-emotion.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: "db-proyecto-mysql.cluster-cbwzye3glmch.us-east-1.rds.amazonaws.com",
      port: 3306,
      username: "sa",
      password: "luismiguel",
      database: "educati",
      models: [User, Role, Course, UserCourse, UserCourseNote],
      autoLoadModels: true,
      synchronize: true,
    }),
    SeederModule.forRoot({
      runOnlyIfTableIsEmpty: true
    }),
    UserModule,
    RoleModule,
    CourseModule,
    UserCourseModule,
    UserCourseNoteModule,
    UserCourseEmotionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
