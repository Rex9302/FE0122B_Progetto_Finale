import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComuniRoutingModule } from './comuni-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NewComuneComponent } from './new-comune/new-comune.component';
import { ModComuneComponent } from './mod-comune/mod-comune.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [NewComuneComponent, ModComuneComponent],
  imports: [
    CommonModule,
    ComuniRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class ComuniModule { }
