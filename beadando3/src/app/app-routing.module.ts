import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeradoComponent } from './verado/verado.component';
import { LocalListComponent } from './local-list/local-list.component';
import { LocalComponent } from './local/local.component';


const routes: Routes = [
  {
  path: '',
    component: LocalListComponent
  },
  {
    path: 'local',
    component: LocalComponent
  },
  {
    path: 'local/:id',
    component : LocalComponent
  },
  {
    path: 'verado',
    component: VeradoComponent
  },
  {
    path: 'verado/:id',
    component : VeradoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
