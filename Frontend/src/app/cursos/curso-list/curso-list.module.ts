import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoListPageRoutingModule } from './curso-list-routing.module';

import { CursoListPage } from './curso-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      CursoListPageRoutingModule
  ],
  declarations: [CursoListPage]
})
export class CursoListPageModule {}
