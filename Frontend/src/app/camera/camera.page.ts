import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
//import { Photo, PhotoService } from '../services/photo.service';
//import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
import { CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
import { Plugins } from '@capacitor/core';
const { CameraPreview } = Plugins;

import '@capacitor-community/camera-preview'
import { UserCourseEmotion, UserCourseEmotionInfo } from 'src/interfaces/UserCourseEmotion';
import { UserCourseEmotionService } from '../services/user-course-emotion.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: 'Camera.page.html',
  styleUrls: ['Camera.page.scss']
})
export class CameraPage {

  image = null;
  cameraActive = false;
  runTakePhotos = false;
  interval;
  currentTime = 0;
  userCourseEmotionInfo: UserCourseEmotionInfo = new UserCourseEmotion;

  constructor(
    /*public photoService: PhotoService, */
    public actionSheetController: ActionSheetController,
    private userCourseEmotionService: UserCourseEmotionService,
    ) {}

  async ngOnInit() {
    /*await this.photoService.loadSaved();*/
    
  }

  ionViewWillLeave(){
    this.stopInterval();
  }

  /*public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }*/

  openCamera(){
    const CameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview',
      storeToFile: true,
      toBack: true,
    };
    CameraPreview.start(CameraPreviewOptions);
    this.cameraActive = true;
    this.runTakePhotos = true;
  }

  async stopCamera(){
    await CameraPreview.stop();
    this.cameraActive = false;
    this.stopInterval();
  }

  async captureImage(){
    this.runTakePhotos = false;

    /*this.interval = setInterval(() => {
      this.currentTime = this.currentTime + 1;
        console.log('Take Photo '+this.currentTime);
      }, 3000);*/

      const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
        quality: 50,
      };
      const result = await CameraPreview.capture(cameraPreviewPictureOptions);
      this.image = `data:image/png;base64,${result.value}`;
      //this.image = "data:image/png;base64,"+result.value;

      this.userCourseEmotionInfo.userId = 2;
      this.userCourseEmotionInfo.courseId = 7;
      this.userCourseEmotionInfo.sad = 10;

      /*let img = new Image();
      img.src = this.image;*/

      this.userCourseEmotionInfo.img = this.image;

      console.log(this.userCourseEmotionInfo);

      this.userCourseEmotionService.sendImage(this.userCourseEmotionInfo).subscribe(data => {

      });


      this.stopCamera();

  }

  flipCamera(){
    CameraPreview.flip();
  }

  stopInterval(){
    this.runTakePhotos = true;
    clearInterval(this.interval);
  }

  action(){
    this.userCourseEmotionInfo.id = 2;
    this.userCourseEmotionInfo.courseId = 7;
    this.userCourseEmotionInfo.sad = 10;
    this.userCourseEmotionService.create(this.userCourseEmotionInfo, 'hola').subscribe(data => {
      console.log('listo');
    });
  }
 
}
