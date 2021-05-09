"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedRol = void 0;
const nestjs_sequelize_seeder_1 = require("nestjs-sequelize-seeder");
const role_model_1 = require("./role.model");
let SeedRol = class SeedRol {
    run() {
        const data = [
            {
                name: 'Director',
                permissions: '[]'
            },
            {
                name: 'Educador',
                permissions: '[]'
            },
            {
                name: 'Alumno',
                permissions: '[]'
            },
            {
                name: 'Apoderado',
                permissions: '[]'
            },
        ];
        return data;
    }
};
SeedRol = __decorate([
    nestjs_sequelize_seeder_1.Seeder({
        model: role_model_1.Role,
        unique: ['name'],
    })
], SeedRol);
exports.SeedRol = SeedRol;
//# sourceMappingURL=role.seed.js.map