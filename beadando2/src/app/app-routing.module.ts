import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalComponent } from './local/local.component';
import { VeradoComponent } from './verado/verado.component';
import { VeradoListComponent } from './verado-list/verado-list.component';
import { LocalListComponent } from './local-list/local-list.component';


const routes: Routes = [
  { path:'local', component: LocalComponent },
  { path:'local/:id', component: LocalComponent },
  { path:'lista', component: VeradoListComponent },
  { path:'local/verado/:id', component: VeradoComponent },
  { path:'local-list', component: LocalListComponent},
  { path: '', redirectTo: '/local', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
