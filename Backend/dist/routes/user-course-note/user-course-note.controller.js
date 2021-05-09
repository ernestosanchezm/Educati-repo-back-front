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
exports.UserCourseNoteController = void 0;
const common_1 = require("@nestjs/common");
const user_course_note_service_1 = require("./user-course-note.service");
let UserCourseNoteController = class UserCourseNoteController {
    constructor(userCourseNoteService) {
        this.userCourseNoteService = userCourseNoteService;
    }
    findAll(rs) {
        return this.userCourseNoteService.findAll()
            .then(r => {
            rs.status(200).json(r);
        })
            .catch(e => {
            rs.status(400).json(e);
        });
    }
    findOne(id, rs) {
        return this.userCourseNoteService.findOne(id)
            .then(r => {
            rs.status(200).json(r);
        })
            .catch(e => {
            rs.status(400).json(e);
        });
    }
    create(newUserCourseNote, rs) {
        return this.userCourseNoteService.create(newUserCourseNote)
            .then(r => {
            rs.status(201).json(r);
        })
            .catch(e => {
            rs.status(400).json(e);
        });
    }
    update(id, user, rs) {
        return this.userCourseNoteService.update(user, id)
            .then(r => {
            if (r[0] == 1) {
                rs.status(200).json({ status: 'success' });
            }
            else {
                rs.status(400).json({ status: 'error', message: 'No se pudo actualizar la nota' });
            }
        })
            .catch(e => {
            rs.status(400).json({ status: 'error', message: e });
        });
    }
    delete(id, rs) {
        return this.userCourseNoteService.remove(id)
            .then(r => {
            rs.status(200).json(r);
        })
            .catch(e => {
            rs.status(400).json(e);
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserCourseNoteController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserCourseNoteController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserCourseNoteController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], UserCourseNoteController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserCourseNoteController.prototype, "delete", null);
UserCourseNoteController = __decorate([
    common_1.Controller('user-course-note'),
    __metadata("design:paramtypes", [user_course_note_service_1.UserCourseNoteService])
], UserCourseNoteController);
exports.UserCourseNoteController = UserCourseNoteController;
//# sourceMappingURL=user-course-note.controller.js.map