import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientiRoutingModule } from './clienti-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { ModificaClienteComponent } from './modifica-cliente/modifica-cliente.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    NewClienteComponent,
    ModificaClienteComponent
  ],
  imports: [
    CommonModule,
    ClientiRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientiModule { }
