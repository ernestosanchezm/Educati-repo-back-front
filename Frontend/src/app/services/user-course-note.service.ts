import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserCourseNoteService {
    url = 'http://localhost:3000/'
    
    constructor(private http: HttpClient){}

    create(userCourseNote: any): Observable<any> {
        const usersCourseNote$ = this.http.post(this.url + 'user-course-note', userCourseNote);
        return usersCourseNote$;
    }

    getAll(): Observable<any> {
        const userCoursesNote$ = this.http.get(this.url + 'user-course-note');
        return userCoursesNote$;
    }

    getById(id: number): Observable<any> {
        const userCourseNote$ = this.http.get(this.url + 'user-course-note/' + id);
        return userCourseNote$;
    }

    update(userCourseNote: any, id: string): Observable<any> {
        const userCourseNote$ = this.http.put(this.url + 'user-course-note/' + userCourseNote.id, userCourseNote);
        return userCourseNote$;
    }

    delete(id: number): Observable<any> {
        const userCourseNote$ = this.http.delete(this.url + 'user-course-note/' + id);
        return userCourseNote$;
    }


}


