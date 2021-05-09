"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedUser = void 0;
const nestjs_sequelize_seeder_1 = require("nestjs-sequelize-seeder");
const user_model_1 = require("./user.model");
const md5 = require('md5');
let SeedUser = class SeedUser {
    run() {
        const data = [
            {
                firstName: 'Director',
                lastName: 'General',
                email: 'director@educati.com',
                userType: '1',
                password: md5('secret')
            }
        ];
        return data;
    }
};
SeedUser = __decorate([
    nestjs_sequelize_seeder_1.Seeder({
        model: user_model_1.User,
        unique: ['name'],
    })
], SeedUser);
exports.SeedUser = SeedUser;
//# sourceMappingURL=user.seed.js.map