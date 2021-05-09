import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/3',
    pathMatch: 'full'
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'user/:userType/registrar',
    loadChildren: () => import('./users/new-user/new-user.module').then( m => m.NewUserPageModule)
  },
  {
    path: 'user/:userType/editar/:userId',
    loadChildren: () => import('./users/edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
  {
    path: 'user/:userType',
    loadChildren: () => import('./users/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'curso/registrar',
    loadChildren: () => import('./cursos/new-curso/new-curso.module').then( m => m.NewCursoPageModule)
  },
  {
    path: 'curso/editar/:cursoId',
    loadChildren: () => import('./cursos/edit-curso/edit-curso.module').then( m => m.EditCursoPageModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./cursos/curso-list/curso-list.module').then( m => m.CursoListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
