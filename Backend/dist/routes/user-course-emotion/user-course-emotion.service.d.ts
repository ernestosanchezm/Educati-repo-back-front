import { UserCourseEmotion } from './user-course-emotion.model';
export declare class UserCourseEmotionService {
    private userCourseEmotionModel;
    constructor(userCourseEmotionModel: typeof UserCourseEmotion);
    create(userCourseNote: UserCourseEmotion): Promise<UserCourseEmotion>;
    sendImage(userCourse: any): void;
    findAll(): Promise<UserCourseEmotion[]>;
    findOne(courseId: string): Promise<UserCourseEmotion>;
    remove(id: string): Promise<any>;
}
