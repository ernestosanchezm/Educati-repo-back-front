"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCourseEmotionService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_course_emotion_model_1 = require("./user-course-emotion.model");
var fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
AWS.config.loadFromPath(path.join(__dirname, '/config.json'));
const rekognition = new AWS.Rekognition();
let UserCourseEmotionService = class UserCourseEmotionService {
    constructor(userCourseEmotionModel) {
        this.userCourseEmotionModel = userCourseEmotionModel;
    }
    create(userCourseNote) {
        return this.userCourseEmotionModel.create(userCourseNote);
    }
    sendImage(userCourse) {
        let m = this;
        let newImage = userCourse.img.split(';base64,').pop();
        fs.writeFile('photo.png', newImage, { encoding: 'base64' }, (error) => {
            console.log('Esta es la buena');
            var params = {
                Image: {
                    Bytes: fs.readFileSync('photo.png')
                },
                Attributes: ['ALL']
            };
            return rekognition.detectFaces(params, function (err, data) {
                if (err)
                    console.log(err, err.stack);
                else {
                    let obj = {
                        userId: userCourse.userId,
                        courseId: userCourse.courseId,
                    };
                    data.FaceDetails[0].Emotions.forEach((ele) => {
                        obj[ele.Type.toLowerCase()] = ele.Confidence;
                    });
                    console.log(obj);
                    return m.userCourseEmotionModel.create(obj);
                }
                ;
            });
        });
    }
    async findAll() {
        return this.userCourseEmotionModel.findAll();
    }
    findOne(courseId) {
        return this.userCourseEmotionModel.findOne({
            where: {
                courseId
            }
        });
    }
    async remove(id) {
        return this.userCourseEmotionModel.destroy({
            where: {
                courseId: id
            }
        });
    }
};
UserCourseEmotionService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(user_course_emotion_model_1.UserCourseEmotion)),
    __metadata("design:paramtypes", [Object])
], UserCourseEmotionService);
exports.UserCourseEmotionService = UserCourseEmotionService;
//# sourceMappingURL=user-course-emotion.service.js.map