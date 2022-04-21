import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComuneComponent } from './new-comune.component';

const routes: Routes = [{
  path:'',
  component:NewComuneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewComuneRoutingModule { }
