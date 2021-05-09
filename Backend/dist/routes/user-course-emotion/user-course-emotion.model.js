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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCourseEmotion = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let UserCourseEmotion = class UserCourseEmotion extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserCourseEmotion.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserCourseEmotion.prototype, "courseId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCourseEmotion.prototype, "happy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCourseEmotion.prototype, "surprised", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCourseEmotion.prototype, "sad", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCourseEmotion.prototype, "calm", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCourseEmotion.prototype, "fear", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCourseEmotion.prototype, "disgusted", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCourseEmotion.prototype, "angry", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCourseEmotion.prototype, "confused", void 0);
UserCourseEmotion = __decorate([
    sequelize_typescript_1.Table
], UserCourseEmotion);
exports.UserCourseEmotion = UserCourseEmotion;
//# sourceMappingURL=user-course-emotion.model.js.map