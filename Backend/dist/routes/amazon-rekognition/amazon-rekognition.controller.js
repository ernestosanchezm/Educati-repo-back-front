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
exports.AmazonRekognitionController = void 0;
const common_1 = require("@nestjs/common");
const amazon_rekognition_service_1 = require("./amazon-rekognition.service");
let AmazonRekognitionController = class AmazonRekognitionController {
    constructor(amazonRekognitionService) {
        this.amazonRekognitionService = amazonRekognitionService;
    }
    sendImage(newImage, rs) {
        return this.amazonRekognitionService.sendImage(newImage)
            .then(r => {
            rs.status(201).json(r);
        })
            .catch(e => {
            rs.status(400).json(e);
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AmazonRekognitionController.prototype, "sendImage", null);
AmazonRekognitionController = __decorate([
    common_1.Controller('amazon-rekognition'),
    __metadata("design:paramtypes", [amazon_rekognition_service_1.AmazonRekognitionService])
], AmazonRekognitionController);
exports.AmazonRekognitionController = AmazonRekognitionController;
//# sourceMappingURL=amazon-rekognition.controller.js.map