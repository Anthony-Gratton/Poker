import { Injectable } from '@angular/core';
import { urlServeur } from './utils';
import { Joueur } from './modele/joueur';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokerService {

  constructor(private http: HttpClient) { }

  getJoueurs() {
    let url = urlServeur + "/getJoueurs"
    return this.http.get<Joueur[]>(url)
  }
}
