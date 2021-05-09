import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    //{ title: 'Director', url: '/user/1', icon: 'archive' },
    { title: 'Docentes', url: '/user/2', icon: 'school' },
    { title: 'Alumnos', url: '/user/3', icon: 'people' },
    { title: 'Apoderados', url: '/user/4', icon: 'man' },
    { title: 'Cursos', url: '/curso', icon: 'newspaper' },
    { title: 'Camara', url: '/camera', icon: 'camera' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
