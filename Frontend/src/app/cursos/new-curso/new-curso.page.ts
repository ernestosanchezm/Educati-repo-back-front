import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, CourseInfo } from 'src/interfaces/Course';
import { CourseService } from '../../services/course.service';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { User, UserInfo } from 'src/interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: '../new-curso/new-curso.page.html',
  styleUrls: ['../new-curso/new-curso.page.scss'],
})
export class NewCursoPage implements OnInit {

  action: string = 'Registrar';
  public act: number = 2;
  dataUsers: Array<any>[];
  userInfo: UserInfo = new User;
  
  dataCourse: Array<any>[];

  courseInfo: CourseInfo = new Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private courseService: CourseService,
    public alertController: AlertController,
    private router: Router
    
    ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.userService.getAll().subscribe(data => {
      this.userInfo = data.filter(user => user.userType == '2');
      this.dataUsers = Object.values(this.userInfo);
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro Usuario',
      /*subHeader: 'Success',*/
      message: 'El usuario se agregó correctamente.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.router.navigate(['curso']);
    console.log('onDidDismiss resolved with role', role);
  }

  logForm(){
    this.courseService.create(this.courseInfo).subscribe(data => {
      this.presentAlert();
    });
  }

}
