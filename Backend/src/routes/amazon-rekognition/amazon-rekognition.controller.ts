import { Body, Controller, Post, Res } from "@nestjs/common";
import { AmazonRekognitionService } from "./amazon-rekognition.service";
import { Response } from 'express';

@Controller('amazon-rekognition')
export class AmazonRekognitionController {

    constructor(
        private amazonRekognitionService: AmazonRekognitionService
    ){}
   
    @Post()
    sendImage(@Body() newImage, @Res() rs: Response) {
        return this.amazonRekognitionService.sendImage(newImage)
        .then(r => {
            rs.status(201).json(r);
        })
        .catch(e => {
            rs.status(400).json(e);
        })
    }

}