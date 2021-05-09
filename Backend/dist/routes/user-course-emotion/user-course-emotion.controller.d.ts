import { UserCourseEmotionService } from "./user-course-emotion.service";
import { Response } from 'express';
export declare class UserCourseEmotionController {
    private userCourseEmotionService;
    constructor(userCourseEmotionService: UserCourseEmotionService);
    findAll(rs: Response): Promise<void>;
    sendImage(userCourse: any, rs: Response): void;
    delete(id: any, rs: Response): Promise<void>;
}
