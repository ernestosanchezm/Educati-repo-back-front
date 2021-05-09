"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCourseModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_course_controller_1 = require("./user-course.controller");
const user_course_model_1 = require("./user-course.model");
const user_course_service_1 = require("./user-course.service");
let UserCourseModule = class UserCourseModule {
};
UserCourseModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([user_course_model_1.UserCourse])
        ],
        providers: [user_course_service_1.UserCourseService],
        controllers: [user_course_controller_1.UserCourseController],
    })
], UserCourseModule);
exports.UserCourseModule = UserCourseModule;
//# sourceMappingURL=user-course.module.js.map