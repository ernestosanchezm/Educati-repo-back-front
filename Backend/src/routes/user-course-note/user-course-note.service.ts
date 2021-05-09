import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserCourseNote } from './user-course-note.model';

@Injectable()
export class UserCourseNoteService {
    constructor(
        @InjectModel(UserCourseNote)
        private courseModel: typeof UserCourseNote,
    ) { }

    create(userCourseNote: UserCourseNote) {
        return this.courseModel.create(userCourseNote);
    }

    update(userCourseNote: UserCourseNote, id: string) {
        return this.courseModel.update(userCourseNote,{
            where: {
                id
            }
        })
    }

    async findAll(): Promise<UserCourseNote[]> {
        return this.courseModel.findAll();
    }

    findOne(courseId: string): Promise<UserCourseNote> {
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