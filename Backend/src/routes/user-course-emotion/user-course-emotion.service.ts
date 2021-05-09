import { Injectable } from '@nestjs/common';
import { ContextIdFactory } from '@nestjs/core';
import { InjectModel } from '@nestjs/sequelize';
import { UserCourseEmotion } from './user-course-emotion.model';

var fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
AWS.config.loadFromPath(path.join(__dirname, '/config.json'));
const rekognition = new AWS.Rekognition();

@Injectable()
export class UserCourseEmotionService {
    constructor(
        @InjectModel(UserCourseEmotion)
        private userCourseEmotionModel: typeof UserCourseEmotion,
    ) { }

    create(userCourseNote: UserCourseEmotion) {
        return this.userCourseEmotionModel.create(userCourseNote);
    }

    sendImage(userCourse: any) {
        let m = this;
        let newImage = userCourse.img.split(';base64,').pop();
        //const buffer = Buffer.from(userCourse.img, 'base64');
        fs.writeFile('photo.png', newImage, {encoding: 'base64'}, (error) =>{
            console.log('Esta es la buena');
            var params = {
                Image: {
                  Bytes: fs.readFileSync('photo.png')
                },
                Attributes: ['ALL']
              };
              return rekognition.detectFaces(params, function(err, data) {
                 if (err) console.log(err, err.stack); // an error occurred
                 else {
                     let obj = {
                         userId: userCourse.userId,
                         courseId: userCourse.courseId,
                     }
                    data.FaceDetails[0].Emotions.forEach((ele) => {
                        obj[ele.Type.toLowerCase()] = ele.Confidence;
                    });
                    console.log(obj);
                    return m.userCourseEmotionModel.create(obj)}; // successful response
               });   
        });

           
    }

    async findAll(): Promise<UserCourseEmotion[]> {
        return this.userCourseEmotionModel.findAll();
    }

    findOne(courseId: string): Promise<UserCourseEmotion> {
        return this.userCourseEmotionModel.findOne({
            where: {
                courseId
            }
        });
    }

    async remove(id: string): Promise<any> {
        return this.userCourseEmotionModel.destroy({
            where: {
                courseId: id
            }
        })
    }
}