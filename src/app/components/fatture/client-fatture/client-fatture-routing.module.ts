import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFattureComponent } from './client-fatture.component';

const routes: Routes = [{
  path:'',
  component:ClientFattureComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientFattureRoutingModule { }
