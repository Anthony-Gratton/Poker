import { Component } from '@angular/core';
import { Joueur } from './models/joueur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poker420';
  logonOk=false;

  onConnexionReussie(j:Joueur){
    this.logonOk=true;
  }

  deconnexionReussi(j:Joueur){
    this.logonOk=false;
  }
}
