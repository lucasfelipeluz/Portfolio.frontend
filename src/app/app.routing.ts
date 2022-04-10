import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ProjetosComponent } from './projetos/projetos.component';

const app_routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'controle-financeiro', component: ProjetosComponent}
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(app_routes);