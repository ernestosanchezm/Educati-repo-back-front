import { AmazonRekognitionService } from "./amazon-rekognition.service";
import { Response } from 'express';
export declare class AmazonRekognitionController {
    private amazonRekognitionService;
    constructor(amazonRekognitionService: AmazonRekognitionService);
    sendImage(newImage: any, rs: Response): any;
}
