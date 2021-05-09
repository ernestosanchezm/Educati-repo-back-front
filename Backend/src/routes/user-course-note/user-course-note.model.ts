import { Column, Model, Table } from "sequelize-typescript";

@Table
export class UserCourseNote extends Model {
    @Column
    userId: number;

    @Column
    courseId: number;

    @Column
    note: number;

    @Column
    comment: String;

}