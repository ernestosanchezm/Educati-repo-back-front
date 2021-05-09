import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UserCourseNote, UserCourseNoteInfo } from 'src/interfaces/UserCourseNote';
import { UserCourseNoteService } from '../services/user-course-note.service';


@Component({
  selector: 'app-modal',
  templateUrl: '../modals/modal.page.html',
  styleUrls: ['../modals/modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() data: any;
  @Input() curso: any;

  userCourseNote: UserCourseNoteInfo = new UserCourseNote;
  userCourseNoteAssig: UserCourseNoteInfo = new UserCourseNote;
  dataNote: Array<any>[];

  constructor(
    public modalController: ModalController,
    private userCourseNoteService: UserCourseNoteService,
    public alertController: AlertController,
    private router: Router
    ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.userCourseNoteService.getAll().subscribe(data => {
      this.userCourseNote = data.filter(user => user.userId == this.data.id);
      this.dataNote = Object.values(this.userCourseNote);
    });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Actualización de Curso',
      /*subHeader: 'Success',*/
      message: 'La nota se agregó correctamente.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.router.navigate(['curso']);
    this.dismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  logForm(){
    this.userCourseNoteAssig.userId = this.data.id;
    this.userCourseNoteAssig.courseId = this.curso;

    console.log(this.userCourseNoteAssig);
    this.userCourseNoteService.create(this.userCourseNoteAssig).subscribe(data => {
      this.presentAlert();
    });
  }
  
}

