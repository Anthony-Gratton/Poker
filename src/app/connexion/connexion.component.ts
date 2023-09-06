import { Component, EventEmitter, Output } from '@angular/core';
import { tr } from '../utile';
import { Joueur } from '../models/joueur';
import { Poker420Service } from '../poker420.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {


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
