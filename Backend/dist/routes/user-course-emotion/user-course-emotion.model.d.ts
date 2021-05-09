import { Model } from "sequelize-typescript";
export declare class UserCourseEmotion extends Model {
    userId: number;
    courseId: number;
    happy: string;
    surprised: string;
    sad: string;
    calm: string;
    fear: string;
    disgusted: string;
    angry: string;
    confused: string;
}
