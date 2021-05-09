import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoPageRoutingModule } from './new-curso-routing.module';

import { NewCursoPage } from './new-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      CursoPageRoutingModule
  ],
  declarations: [NewCursoPage]
})
export class NewCursoPageModule {}
