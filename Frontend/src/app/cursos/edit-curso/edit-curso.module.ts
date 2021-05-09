import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditCursoPageRoutingModule } from './edit-curso-routing.module';
import { EditCursoPage } from './edit-curso.page';
import { ModalPage } from 'src/app/modals/modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      EditCursoPageRoutingModule
  ],
  declarations: [EditCursoPage, ModalPage]
})
export class EditCursoPageModule {}
