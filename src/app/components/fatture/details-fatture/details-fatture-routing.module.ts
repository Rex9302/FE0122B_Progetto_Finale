import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFattureComponent } from './details-fatture.component';

const routes: Routes = [{
  path:'',
  component:DetailsFattureComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsFattureRoutingModule { }
