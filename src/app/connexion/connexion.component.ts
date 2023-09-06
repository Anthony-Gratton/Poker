<<<<<<< HEAD
import { Component, EventEmitter, Output } from '@angular/core';
import { tr } from '../utile';
import { Joueur } from '../models/joueur';
import { Poker420Service } from '../poker420.service';

=======
import { Component } from '@angular/core';
import { tr } from "./../utils";
import { Joueur } from "./../modele/joueur";
import { PokerService } from '../poker.service';
>>>>>>> fbaa83c77bc49b01a9debd9acf5310ed4494b4cf
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

<<<<<<< HEAD

  connexionVisible=true;
  creerCompteVisible=false;

  constructor(private pk420Srv:Poker420Service){}

  joueurConnecte:Joueur= new Joueur();
  joueurCandidat:Joueur = new Joueur();
  confirmation="";

  @Output() connexionReussie: EventEmitter<Joueur> = new EventEmitter<Joueur>()



  //-------------------------------------------
  //
  //-------------------------------------------
  creationCompte(){
    tr("Création d'un compte")
    this.connexionVisible=false;
    this.creerCompteVisible=true;
  }

  //-------------------------------------------
  //
  //-------------------------------------------
  connexion(){
    // tr("Connexion de " + this.joueurCandidat.nom, false);

    this.triche();
    if(this.joueurCandidat.nom.length >0){
      this.pk420Srv.connectionJoueur(this.joueurCandidat).subscribe(
        joueurConnect =>{
    
          this.joueurConnecte=joueurConnect;
          this.connexionReussie.emit(this.joueurConnecte);
          tr("Joueur connecté: " + joueurConnect.nom,false)
        }
      )
    }
=======
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
>>>>>>> fbaa83c77bc49b01a9debd9acf5310ed4494b4cf
  }

  triche()
  {
    if(this.joueurCandidat.nom.length == 0){
      this.joueurCandidat.nom ='Amy';
      this.joueurCandidat.motDePasse ='11';
    }
  }


  //-------------------------------------------
  //
  //-------------------------------------------
  validerCreatioCompte() {
    tr("validation de " + this.joueurCandidat.nom);

    if(this.infoValides()){
        this.pk420Srv.creationJoueur(this.joueurCandidat).subscribe(
          joueurCree =>{
            tr("Joueur créé: " + joueurCree.nom,false)
            this.joueurConnecte=joueurCree;
            this.connexionReussie.emit(this.joueurConnecte);
            tr("Joueur connecté: " + joueurCree.nom,false)
          }
        )
    }

    return true;
  }

  //-------------------------------------------
  //
  //-------------------------------------------
  infoValides(){
    return true;
  }

  //-------------------------------------------
  //
  //-------------------------------------------
  annulerCreationCompte(){
    this.connexionVisible=true;
    this.creerCompteVisible=false;
  }

  //-------------------------------------------
  //
  //-------------------------------------------
  afficherTousLesJoueurs(){
    this.pk420Srv.getJoueurs().subscribe(
      tabj => {
        tr("Il y a " + tabj.length + " joueurs dans la BD",false);
      }
    )
  }


}
