"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./routes/user/user.model");
const user_module_1 = require("./routes/user/user.module");
const role_model_1 = require("./routes/role/role.model");
const nestjs_sequelize_seeder_1 = require("nestjs-sequelize-seeder");
const role_module_1 = require("./routes/role/role.module");
const course_model_1 = require("./routes/course/course.model");
const course_module_1 = require("./routes/course/course.module");
const user_course_model_1 = require("./routes/user-course/user-course.model");
const user_course_module_1 = require("./routes/user-course/user-course.module");
const user_course_note_model_1 = require("./routes/user-course-note/user-course-note.model");
const user_course_note_module_1 = require("./routes/user-course-note/user-course-note.module");
const user_course_emotion_module_1 = require("./routes/user-course-emotion/user-course-emotion.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: "mysql",
                host: "db-proyecto-mysql.cluster-cbwzye3glmch.us-east-1.rds.amazonaws.com",
                port: 3306,
                username: "sa",
                password: "luismiguel",
                database: "educati",
                models: [user_model_1.User, role_model_1.Role, course_model_1.Course, user_course_model_1.UserCourse, user_course_note_model_1.UserCourseNote],
                autoLoadModels: true,
                synchronize: true,
            }),
            nestjs_sequelize_seeder_1.SeederModule.forRoot({
                runOnlyIfTableIsEmpty: true
            }),
            user_module_1.UserModule,
            role_module_1.RoleModule,
            course_module_1.CourseModule,
            user_course_module_1.UserCourseModule,
            user_course_note_module_1.UserCourseNoteModule,
            user_course_emotion_module_1.UserCourseEmotionModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map