import { Model } from "sequelize-typescript";
export declare class Course extends Model {
    name: String;
    grade: number;
    teacherId: String;
    note: String;
}
