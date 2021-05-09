import { Column, Model, Table } from "sequelize-typescript";
import * as md5 from 'md5'

@Table
export class User extends Model {
    @Column
    firstName: String;

    @Column
    lastName: String;

    @Column
    email: String;

    @Column
    dni: String;

    @Column
    age: number;

    @Column
    grade: number;

    @Column
    parentR: String;

    @Column
    parentId: number;

    @Column
    userType: number;

    @Column({ defaultValue: md5('secret') })
    password: String;

    @Column({ defaultValue: true })
    restorePassword: boolean;

}