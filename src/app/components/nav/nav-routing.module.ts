import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from 'src/app/auth/components/signup/signup.component';
import { AuthGuard } from 'src/app/auth/guard/auth.guard';
import { NavComponent } from './nav.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'logged-signup',
        component: SignupComponent,
      },
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'users',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'clienti',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../clienti/clienti.module').then((m) => m.ClientiModule),
      },
      {
        path: 'clienti/nuovo-cliente',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../clienti/new-cliente/new-cliente.module').then(
            (m) => m.NewClienteModule
          ),
      },
      {
        path: 'clienti/modifica-cliente/:id',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../clienti/modifica-cliente/modifica-cliente.module').then(
            (m) => m.ModificaClienteModule
          ),
      },
      {
        path: 'fatture',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../fatture/fatture.module').then((m) => m.FattureModule),
      },
      {
        path: 'fatture/:id',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../fatture/details-fatture/details-fatture.module').then(
            (m) => m.DetailsFattureModule
          ),
      },
      {
        path: 'fatture/cliente/:id',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../fatture/client-fatture/client-fatture.module').then(
            (m) => m.ClientFattureModule
          ),
      },
      {
        path: 'nuova-fattura/cliente/:id',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../fatture/new-fattura/new-fattura.module').then(
            (m) => m.NewFatturaModule
          ),
      },
      {
        path: 'province',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../provincie/provincie.module').then(
            (m) => m.ProvincieModule
          ),
      },
      {
        path: 'province/nuova-provincia',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../provincie/new-provincia/new-provincia.module').then(
            (m) => m.NewProvinciaModule
          ),
      },
      {
        path: 'province/:id',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../provincie/mod-provincia/mod-provincia.module').then(
            (m) => m.ModProvinciaModule
          ),
      },
      {
        path: 'comuni',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../comuni/comuni.module').then(
            (m) => m.ComuniModule
          ),
      },
      {
        path: 'comuni/nuovo-comune',
        loadChildren: () =>
          import('../comuni/new-comune/new-comune.module').then(
            (m) => m.NewComuneModule
          ),
      },
      {
        path: 'comuni/:id',
        loadChildren: () =>
          import('../comuni/mod-comune/mod-comune.module').then(
            (m) => m.ModComuneModule
          ),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavRoutingModule {}
