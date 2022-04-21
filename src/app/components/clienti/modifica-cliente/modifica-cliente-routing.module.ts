import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificaClienteComponent } from './modifica-cliente.component';

const routes: Routes = [
  {
    path:'',
    component:ModificaClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificaClienteRoutingModule { }
