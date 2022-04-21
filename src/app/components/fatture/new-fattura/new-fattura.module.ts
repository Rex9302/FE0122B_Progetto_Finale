import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewFatturaRoutingModule } from './new-fattura-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewFatturaRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
})
export class NewFatturaModule { }
