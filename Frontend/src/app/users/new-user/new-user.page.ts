import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { User, UserInfo } from 'src/interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {

  public userType: String;
  action: String = 'Registro';
  parents: Array<any>[];

  userInfo: UserInfo = new User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    public alertController: AlertController,
    private router: Router
    
    ) { }

  ngOnInit() {}

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
    this.router.navigate(['user/' + this.userType]);
    console.log('onDidDismiss resolved with role', role);
  }

  logForm(){
    this.userInfo.userType = this.userType;
    this.userService.create(this.userInfo).subscribe(data => {
      this.presentAlert();
    });
  }

  ionViewWillEnter(){
    this.userType = this.activatedRoute.snapshot.paramMap.get('userType');
    this.userService.getAll().subscribe(data => {
      if (this.userType == '3'){
        this.parents = data.filter(user => user.userType == '4');
      }
    })
  }
  
}