import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Course } from './course.model';

@Injectable()
export class CourseService {
    constructor(
        @InjectModel(Course)
        private courseModel: typeof Course,
    ) { }

    create(course: Course) {
        return this.courseModel.create(course);
    }

    update(course: Course, id: string) {
        return this.courseModel.update(course,{
            where: {
                id
            }
        })
    }

    updatePassword(course: Course, id: string) {
        return this.courseModel.update(course,{
            where: {
                id
            }
        })
    }

    async findAll(): Promise<Course[]> {
        return this.courseModel.findAll();
    }

    findOne(id: string): Promise<Course> {
        return this.courseModel.findOne({
            where: {
                id
            }
        });
    }

    async remove(id: string): Promise<void> {
        const course = await this.findOne(id);
        await course.destroy();
    }
}