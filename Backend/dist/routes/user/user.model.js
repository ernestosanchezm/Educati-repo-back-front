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
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const md5 = require("md5");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "dni", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "grade", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "parentR", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "parentId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "userType", void 0);
__decorate([
    sequelize_typescript_1.Column({ defaultValue: md5('secret') }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column({ defaultValue: true }),
    __metadata("design:type", Boolean)
], User.prototype, "restorePassword", void 0);
User = __decorate([
    sequelize_typescript_1.Table
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map