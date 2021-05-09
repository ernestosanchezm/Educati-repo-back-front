import { Course } from './course.model';
export declare class CourseService {
    private courseModel;
    constructor(courseModel: typeof Course);
    create(course: Course): Promise<Course>;
    update(course: Course, id: string): Promise<[number, Course[]]>;
    updatePassword(course: Course, id: string): Promise<[number, Course[]]>;
    findAll(): Promise<Course[]>;
    findOne(id: string): Promise<Course>;
    remove(id: string): Promise<void>;
}
