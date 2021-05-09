"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCourseEmotionModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_course_emotion_controller_1 = require("./user-course-emotion.controller");
const user_course_emotion_model_1 = require("./user-course-emotion.model");
const user_course_emotion_service_1 = require("./user-course-emotion.service");
let UserCourseEmotionModule = class UserCourseEmotionModule {
};
UserCourseEmotionModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([user_course_emotion_model_1.UserCourseEmotion])
        ],
        providers: [user_course_emotion_service_1.UserCourseEmotionService],
        controllers: [user_course_emotion_controller_1.UserCourseEmotionController],
    })
], UserCourseEmotionModule);
exports.UserCourseEmotionModule = UserCourseEmotionModule;
//# sourceMappingURL=user-course-emotion.module.js.map