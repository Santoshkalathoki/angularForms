import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {
  path:'home',
  component:HomeComponent
  },

  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'home/:id',
    component: HomeComponent
    },
    {
      path:'detail-view/:id/class/:id',  //Dynamic use ko lagi
      component:UserComponent
    },
    {
      path: 'reactive-form',
      component: ReactiveFormComponent
    },
    {
    path: 'template-form',
    component: TemplateFormComponent,
  },
    
    {
    path: 'table',
    component: TableComponent
    }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

