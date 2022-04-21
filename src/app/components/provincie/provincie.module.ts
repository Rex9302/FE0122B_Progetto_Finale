import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvincieRoutingModule } from './provincie-routing.module';
import { NewProvinciaComponent } from './new-provincia/new-provincia.component';
import { ModProvinciaComponent } from './mod-provincia/mod-provincia.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NewProvinciaComponent, ModProvinciaComponent],
  imports: [
    CommonModule,
    ProvincieRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ProvincieModule { }
