import { Module } from '@nestjs/common';
import { AmazonRekognitionController } from './amazon-rekognition.controller';
import { AmazonRekognitionService } from './amazon-rekognition.service';

@Module({
    imports: [
    ],
    providers: [AmazonRekognitionService],
    controllers: [AmazonRekognitionController],
})
export class AmazonRekognitionModule { }