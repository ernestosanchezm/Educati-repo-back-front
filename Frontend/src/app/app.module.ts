import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';
import { CourseService } from './services/course.service';
import { UserCourseService } from './services/user-course.service';
import { PhotoService } from './services/photo.service';
import { UserCourseNoteService } from './services/user-course-note.service';
import { EditCursoPageModule } from './cursos/edit-curso/edit-curso.module';
import { UserCourseEmotionService } from './services/user-course-emotion.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, EditCursoPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClientModule, 
    UserService,
    CourseService,
    UserCourseService,
    UserCourseNoteService,
    UserCourseEmotionService,
    PhotoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
