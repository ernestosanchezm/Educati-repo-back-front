import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserCourse } from './user-course.model';

@Injectable()
export class UserCourseService {
    constructor(
        @InjectModel(UserCourse)
        private courseModel: typeof UserCourse,
    ) { }

    create(userCourse: UserCourse) {
        return this.courseModel.create(userCourse);
    }

    bulkCreate(usersCourse: UserCourse[]){
        return this.courseModel.bulkCreate(usersCourse);
    }

    update(userCourse: UserCourse, id: string) {
        return this.courseModel.update(userCourse,{
            where: {
                id
            }
        })
    }

    async findAll(): Promise<UserCourse[]> {
        return this.courseModel.findAll();
    }

    findOne(courseId: string): Promise<UserCourse> {
        return this.courseModel.findOne({
            where: {
                courseId
            }
        });
    }

    async remove(id: string): Promise<any> {
        return this.courseModel.destroy({
            where: {
                courseId: id
            }
        })
    }
}