import { User } from './user.model';
export declare class UserService {
    private userModel;
    constructor(userModel: typeof User);
    create(user: User): Promise<User>;
    update(user: User, id: string): Promise<[number, User[]]>;
    updatePassword(user: User, id: string): Promise<[number, User[]]>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    remove(id: string): Promise<void>;
}
