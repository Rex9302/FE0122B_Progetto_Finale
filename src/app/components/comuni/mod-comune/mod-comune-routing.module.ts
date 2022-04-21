import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModComuneComponent } from './mod-comune.component';

const routes: Routes = [{
  path:'',
  component:ModComuneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModComuneRoutingModule { }
