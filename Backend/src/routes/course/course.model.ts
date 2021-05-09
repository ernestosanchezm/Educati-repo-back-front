import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Course extends Model {
    @Column
    name: String;

    @Column
    grade: number;

    @Column
    teacherId: String;

    @Column
    note: String;

}