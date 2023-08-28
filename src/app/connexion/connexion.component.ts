import { Component } from '@angular/core';
import { tr } from "./../utils";
import { Joueur } from "./../modele/joueur";
import { PokerService } from '../poker.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  connexionVisible: boolean = true
  creerCompteVisible: boolean = false

  joueurConnecte: Joueur = new Joueur
  joueurCandidat: Joueur = new Joueur
  confirmation = "true";

  constructor(private pokerSrv: PokerService) { }

  creationCompte() {
    tr("creation d'un compte")
    this.connexionVisible = false;
    this.creerCompteVisible = true;
  }

  connexion() {
    tr("Connexion de : " + this.joueurCandidat.nom)
  }

  annulerCreationCompte() {
    this.connexionVisible = true;
    this.creerCompteVisible = false;
  }

  validerCreationCompte() {
    tr("validation de: " + this.joueurCandidat.nom)
    return true
  }

  afficherTousLesJoueurs() {
    this.pokerSrv.getJoueurs().subscribe(
      tabJ => (
        console.log(tabJ)
      )
    )
  }



}
