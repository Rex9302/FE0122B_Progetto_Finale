import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFatturaComponent } from './new-fattura.component';

const routes: Routes = [{
  path:'',
  component:NewFatturaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFatturaRoutingModule { }
