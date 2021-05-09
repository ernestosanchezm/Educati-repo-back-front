import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserCourseService {
    url = 'http://localhost:3000/'
    
    constructor(private http: HttpClient){}

    create(userCourse: any, id: any): Observable<any> {
        const userCourses$ = this.http.post(this.url + 'user-course/' + id, userCourse);
        return userCourses$;
    }

    getAll(): Observable<any> {
        const userCourses$ = this.http.get(this.url + 'user-course');
        return userCourses$;
    }

    getById(id: number): Observable<any> {
        const userCourse$ = this.http.get(this.url + 'user-course/' + id);
        return userCourse$;
    }

    update(userCourse: any, id: string): Observable<any> {
        const userCourse$ = this.http.put(this.url + 'user-course/' + userCourse.id, userCourse);
        return userCourse$;
    }

    delete(id: number): Observable<any> {
        const userCourse$ = this.http.delete(this.url + 'user-course/' + id);
        return userCourse$;
    }


}


