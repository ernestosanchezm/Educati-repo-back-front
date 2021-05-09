import { Model } from "sequelize-typescript";
export declare class User extends Model {
    firstName: String;
    lastName: String;
    email: String;
    dni: String;
    age: number;
    grade: number;
    parentR: String;
    parentId: number;
    userType: number;
    password: String;
    restorePassword: boolean;
}
