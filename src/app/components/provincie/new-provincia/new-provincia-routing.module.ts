import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProvinciaComponent } from './new-provincia.component';

const routes: Routes = [{
  path:'',
  component:NewProvinciaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProvinciaRoutingModule { }
