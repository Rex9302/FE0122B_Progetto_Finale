import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FattureRoutingModule } from './fatture-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFatturaComponent } from './new-fattura/new-fattura.component';
import { DetailsFattureComponent } from './details-fatture/details-fatture.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FattureModule { }
