import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CourseService } from 'src/app/services/course.service';
import { Course, CourseInfo } from 'src/interfaces/Course';
import { UserService } from '../../services/user.service';
import { User, UserInfo } from 'src/interfaces/User';
import { UserCourse, UserCourseInfo } from 'src/interfaces/UserCourse';
import { UserCourseService } from 'src/app/services/user-course.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modals/modal.page';

@Component({
  selector: 'app-user',
  templateUrl: '../new-curso/new-curso.page.html',
  styleUrls: ['../new-curso/new-curso.page.scss'],
})
export class EditCursoPage implements OnInit {

  action: string = 'Editar';
  public act: number = 1;
  public cursoId: number;


  courseInfo: CourseInfo = new Course;

  userInfo: UserInfo = new User;
  dataUsers: Array<any>[];

  userAlum: UserInfo = new User;
  dataAlum: Array<any>[];
  userCourse: UserCourseInfo = new UserCourse;

  apoderados: UserInfo = new User;
  check: boolean;
  cucumber: boolean;
  pos: number = 0;
  data: Array<any>[];
  dataReturned: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private courseService: CourseService,
    private userCourseService: UserCourseService,
    public alertController: AlertController,
    private router: Router,
    public modalController: ModalController
    
    ) { }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Actualización de Curso',
      /*subHeader: 'Success',*/
      message: 'El curso se actualizó correctamente.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.router.navigate(['curso']);
    console.log('onDidDismiss resolved with role', role);
  }

  logForm(){
  let  usersC: Array<any> = [];
    
    for (let i in this.dataAlum) {
      if(this.dataAlum[i]['check'] == true){
        
        /*In this part userCourse is empty*/
        this.userCourse.userId = this.dataAlum[i]['id'];
        this.userCourse.courseId = this.courseInfo.id;
       
        usersC.push(Object.assign({}, this.userCourse));
      }
      
      
    }
    
    console.log(usersC);
    this.courseService.update(this.courseInfo, String(this.cursoId)).subscribe(data => {
    });
    this.userCourseService.create(usersC, this.cursoId).subscribe(data => {
      this.presentAlert();
    });
  }

  ionViewWillEnter(){
    this.cursoId = Number(this.activatedRoute.snapshot.paramMap.get('cursoId'));
    
    this.courseService.getById(this.cursoId).subscribe(data => {
      this.courseInfo = data;
      console.log('Dentro'+this.courseInfo.teacherId);
    });

    this.userService.getAll().subscribe(data => {
      this.userInfo = data.filter(user => user.userType == '2');
      this.dataUsers = Object.values(this.userInfo);
      this.apoderados = data.filter(user => user.userType == '4');
      
      this.userAlum = data.filter(user => user.userType == '3' && user.grade == this.courseInfo.grade);
      
      //------------Revisar---------------
      for (let i in this.userAlum) {
            this.userAlum[i]['check'] = false;
      }
      //------------Revisar---------------
    
      this.userCourseService.getAll().subscribe(userCourse => {
        for (let i in this.userAlum) {
          for (let j in userCourse) {
            if((this.userAlum[i]['id'] == userCourse[j]['userId']) && (this.courseInfo.id == userCourse[j]['courseId'])){
              this.userAlum[i]['check'] = true;
              this.userAlum[i]['button'] = true;
            }
          }
        }
      });
      
      this.dataAlum = Object.values(this.userAlum);

    });
    
  }
  
  updateCucumber() {
    for (let i in this.dataAlum) {
      this.dataAlum[i]['check'] = this.cucumber;
    }
  }

  log(){
    //console.log(this.dataAlum);
  }

  async presentModal(data) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        data: data,
        curso: this.courseInfo.id
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  assigNote(data){
    console.log('dentro'+data.dni);
    this.presentModal(data);
  }
  
}
