import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FattureRoutingModule } from './fatture-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { NewFatturaComponent } from './new-fattura/new-fattura.component';
import { DetailsFattureComponent } from './details-fatture/details-fatture.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    NewFatturaComponent,
    DetailsFattureComponent,
  ],
  imports: [
    CommonModule,
    FattureRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class FattureModule { }
