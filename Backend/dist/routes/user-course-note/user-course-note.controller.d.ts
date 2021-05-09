import { UserCourseNoteService } from "./user-course-note.service";
import { Response } from 'express';
export declare class UserCourseNoteController {
    private userCourseNoteService;
    constructor(userCourseNoteService: UserCourseNoteService);
    findAll(rs: Response): Promise<void>;
    findOne(id: any, rs: Response): Promise<void>;
    create(newUserCourseNote: any, rs: Response): Promise<void>;
    update(id: any, user: any, rs: Response): Promise<void>;
    delete(id: any, rs: Response): Promise<void>;
}
