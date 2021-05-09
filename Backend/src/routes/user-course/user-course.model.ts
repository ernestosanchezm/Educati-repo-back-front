import { Column, Model, Table } from "sequelize-typescript";

@Table
export class UserCourse extends Model {
    @Column
    userId: number;

    @Column
    courseId: number;

}