import { Component,EventEmitter, Output } from '@angular/core';
import { Joueur } from '../models/joueur';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {


  visible =false;
  joueurConnecte = new Joueur();

  @Output() deconnexionAccueil= new EventEmitter<Joueur>()

  deconnexion(){
    this.visible=false;
    this.deconnexionAccueil.emit(this.joueurConnecte);
  }

  onConnexionReussie(j:Joueur){
    this.joueurConnecte =j;
    this.visible=true;
  }
}
