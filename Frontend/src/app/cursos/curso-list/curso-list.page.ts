import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Course, CourseInfo } from 'src/interfaces/Course';
import { UserService } from '../../services/user.service';
import { User, UserInfo } from 'src/interfaces/User';

@Component({
  selector: 'app-course',
  templateUrl: './curso-list.page.html',
  styleUrls: ['./curso-list.page.scss'],
})
export class CursoListPage implements OnInit {

  public cursoId: string;
  dataCourses: Array<any>[];
  courseInfo: CourseInfo = new Course;

  dataUsers: Array<any>[];
  userInfo: UserInfo = new User;

  userAlum: UserInfo = new User;
  dataAlum: Array<any>[];

  constructor(
    private courseService: CourseService,
    private userService: UserService
    ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.courseService.getAll().subscribe(data => {
      this.courseInfo = data;
      this.dataCourses = Object.values(this.courseInfo);
    });

    this.userService.getAll().subscribe(data => {
      this.userInfo = data.filter(user => user.userType == '2');
      this.dataUsers = Object.values(this.userInfo);
    });
    
  }

}
