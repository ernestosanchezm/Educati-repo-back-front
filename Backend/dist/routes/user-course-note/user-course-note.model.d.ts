import { Model } from "sequelize-typescript";
export declare class UserCourseNote extends Model {
    userId: number;
    courseId: number;
    note: number;
    comment: String;
}
