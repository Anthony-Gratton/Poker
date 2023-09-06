import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { HttpClientModule } from "@angular/common/http";
>>>>>>> fbaa83c77bc49b01a9debd9acf5310ed4494b4cf

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConnexionComponent } from './connexion/connexion.component';

import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
<<<<<<< HEAD
    FormsModule,  
=======
    FormsModule,
>>>>>>> fbaa83c77bc49b01a9debd9acf5310ed4494b4cf
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
