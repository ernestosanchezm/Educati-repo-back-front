import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    url = 'http://localhost:3000/'
    
    constructor(private http: HttpClient){}

    create(user: any): Observable<any> {
        const users$ = this.http.post(this.url + 'user', user);
        return users$;
    }

    getAll(): Observable<any> {
        const users$ = this.http.get(this.url + 'user');
        return users$;
    }

    getById(id: number): Observable<any> {
        const user$ = this.http.get(this.url + 'user/' + id);
        return user$;
    }

    update(user: any): Observable<any> {
        const user$ = this.http.put(this.url + 'user/' + user.id, user);
        return user$;
    }

    delete(id: number): Observable<any> {
        const user$ = this.http.delete(this.url + 'user/' + id);
        return user$;
    }

}


