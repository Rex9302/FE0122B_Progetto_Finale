import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModProvinciaComponent } from './mod-provincia.component';

const routes: Routes = [{
  path:'',
  component:ModProvinciaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModProvinciaRoutingModule { }
