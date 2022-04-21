import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavRoutingModule } from './nav-routing.module';
import { UsersModule } from '../users/users.module';
import { UsersComponent } from '../users/users.component';
import { ClientiComponent } from '../clienti/clienti.component';
import { FattureComponent } from '../fatture/fatture.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavComponent } from './nav.component';
import { ProvincieComponent } from '../provincie/provincie.component';
import { ComuniComponent } from '../comuni/comuni.component';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [NavComponent ,UsersComponent, ClientiComponent, FattureComponent, ProvincieComponent, ComuniComponent, HomeComponent],
  imports:[
    CommonModule,
    NavRoutingModule,
    UsersModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NavModule {}
