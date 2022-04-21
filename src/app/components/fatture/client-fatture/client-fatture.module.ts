import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientFattureRoutingModule } from './client-fatture-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ClientFattureComponent } from './client-fatture.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ClientFattureComponent
  ],
  imports: [
    CommonModule,
    ClientFattureRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class ClientFattureModule { }
