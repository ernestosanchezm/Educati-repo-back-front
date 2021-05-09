import { UserCourseNote } from './user-course-note.model';
export declare class UserCourseNoteService {
    private courseModel;
    constructor(courseModel: typeof UserCourseNote);
    create(userCourseNote: UserCourseNote): Promise<UserCourseNote>;
    update(userCourseNote: UserCourseNote, id: string): Promise<[number, UserCourseNote[]]>;
    findAll(): Promise<UserCourseNote[]>;
    findOne(courseId: string): Promise<UserCourseNote>;
    remove(id: string): Promise<any>;
}
