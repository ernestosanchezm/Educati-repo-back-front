import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserCourseEmotionService {
    url = 'http://localhost:3000/'
    
    constructor(private http: HttpClient){}

    create(userCourseEmotion: any, img: any): Observable<any> {
        const usersCourseEmotion$ = this.http.post(this.url + 'user-course-emotion' + img, userCourseEmotion);
        return usersCourseEmotion$;
    }

    sendImage(userCourse: any): Observable<any> {
        const userCourse$ = this.http.post(this.url + 'user-course-emotion/', userCourse);
        return userCourse$;
    }

    getAll(): Observable<any> {
        const userCoursesEmotion$ = this.http.get(this.url + 'user-course-emotion');
        return userCoursesEmotion$;
    }

    getById(id: number): Observable<any> {
        const userCourseEmotion$ = this.http.get(this.url + 'user-course-emotion/' + id);
        return userCourseEmotion$;
    }

    update(userCourseEmotion: any, id: string): Observable<any> {
        const userCourseEmotion$ = this.http.put(this.url + 'user-course-emotion/' + userCourseEmotion.id, userCourseEmotion);
        return userCourseEmotion$;
    }

    delete(id: number): Observable<any> {
        const userCourseEmotion$ = this.http.delete(this.url + 'user-course-emotion/' + id);
        return userCourseEmotion$;
    }


}


