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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const course_model_1 = require("./course.model");
let CourseService = class CourseService {
    constructor(courseModel) {
        this.courseModel = courseModel;
    }
    create(course) {
        return this.courseModel.create(course);
    }
    update(course, id) {
        return this.courseModel.update(course, {
            where: {
                id
            }
        });
    }
    updatePassword(course, id) {
        return this.courseModel.update(course, {
            where: {
                id
            }
        });
    }
    async findAll() {
        return this.courseModel.findAll();
    }
    findOne(id) {
        return this.courseModel.findOne({
            where: {
                id
            }
        });
    }
    async remove(id) {
        const course = await this.findOne(id);
        await course.destroy();
    }
};
CourseService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(course_model_1.Course)),
    __metadata("design:paramtypes", [Object])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map