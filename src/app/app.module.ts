import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ConhecimentosComponent } from './conhecimentos/conhecimentos.component';
import { SobremimContatoComponent } from './sobremim-contato/sobremim-contato.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApresentacaoComponent,
    ProjetosComponent,
    ConhecimentosComponent,
    SobremimContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,

    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
