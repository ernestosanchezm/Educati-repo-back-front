import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseService {
    url = 'http://localhost:3000/'
    
    constructor(private http: HttpClient){}

    create(course: any): Observable<any> {
        const courses$ = this.http.post(this.url + 'course', course);
        return courses$;
    }

    getAll(): Observable<any> {
        const courses$ = this.http.get(this.url + 'course');
        return courses$;
    }

    getById(id: number): Observable<any> {
        const course$ = this.http.get(this.url + 'course/' + id);
        return course$;
    }

    update(course: any, id: string): Observable<any> {
        const course$ = this.http.put(this.url + 'course/' + course.id, course);
        return course$;
    }

    delete(id: number): Observable<any> {
        const course$ = this.http.delete(this.url + 'course/' + id);
        return course$;
    }


}


