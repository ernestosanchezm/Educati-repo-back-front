import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoListPage } from './curso-list.page';

const routes: Routes = [
  {
    path: '',
    component: CursoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoListPageRoutingModule {}
