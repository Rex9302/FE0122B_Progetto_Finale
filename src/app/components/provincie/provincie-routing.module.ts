import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvincieComponent } from './provincie.component';

const routes: Routes = [{
  path:'',
  component:ProvincieComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvincieRoutingModule { }
