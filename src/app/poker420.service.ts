import { Injectable } from '@angular/core';
import { urlServeur } from './utile';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Joueur } from './models/joueur';


@Injectable({
  providedIn: 'root'
})
export class Poker420Service {

  constructor(private http:HttpClient){ 
  }

  creationJoueur(j:Joueur){
    let url = urlServeur +"creationCompte";
    const params = new HttpParams(
       {fromObject:{
        nom: j.nom,
        mdp:j.motDePasse,
        courriel:j.courriel
       }
      });
      return this.http.post<Joueur>(url,params);
  }

  connectionJoueur(j:Joueur){
    let url = urlServeur +"connectionJoueur";

    const params = new HttpParams(
      {fromObject:{
       nom: j.nom,
       mdp:j.motDePasse,

      }
     });
      return this.http.post<Joueur>(url,params);
  }

    getJoueurs(){
      let url = urlServeur + "getJoueurs";
      return this.http.get<Joueur[]>(url);
    }

   
}
