import { UserCourse } from './user-course.model';
export declare class UserCourseService {
    private courseModel;
    constructor(courseModel: typeof UserCourse);
    create(userCourse: UserCourse): Promise<UserCourse>;
    bulkCreate(usersCourse: UserCourse[]): Promise<UserCourse[]>;
    update(userCourse: UserCourse, id: string): Promise<[number, UserCourse[]]>;
    findAll(): Promise<UserCourse[]>;
    findOne(courseId: string): Promise<UserCourse>;
    remove(id: string): Promise<any>;
}
