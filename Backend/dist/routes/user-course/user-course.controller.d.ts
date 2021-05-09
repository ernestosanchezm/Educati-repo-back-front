import { UserCourseService } from "./user-course.service";
import { Response } from 'express';
export declare class UserCourseController {
    private userCourseService;
    constructor(userCourseService: UserCourseService);
    findAll(rs: Response): Promise<void>;
    findOne(id: any, rs: Response): Promise<void>;
    create(newUsersCourse: any, id: any, rs: Response): Promise<void>;
    update(id: any, user: any, rs: Response): Promise<void>;
    delete(id: any, rs: Response): Promise<void>;
}
