import { Column, Model, Table } from "sequelize-typescript";

@Table
export class UserCourseEmotion extends Model {
    @Column
    userId: number;

    @Column
    courseId: number;

    @Column
    happy: string;

    @Column
    surprised: string;

    @Column
    sad: string;

    @Column
    calm: string;

    @Column
    fear: string;

    @Column
    disgusted: string;

    @Column
    angry: string;

    @Column
    confused: string;

}