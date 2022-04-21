import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComuniComponent } from './comuni.component';

const routes: Routes = [{
  path:'',
  component:ComuniComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComuniRoutingModule { }
