import { Component } from '@angular/core';
import {listeEtudiants} from "../data";
import {Etudiant} from "../IpslModele";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {style} from "@angular/animations";

@Component({
  selector: 'app-liste-etudiant2',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    NgIf
  ],
  templateUrl: './liste-etudiant2.component.html',
  styleUrl: './liste-etudiant2.component.scss'
})
export class ListeEtudiant2Component {

  etudiants=listeEtudiants;
  selectedEtudiant?:Etudiant;
  Style={
    "pair":{
      "color":"white",
      "background-color":"black",
      "font-weight":"bold"
    },
    "impair":{
      "color":"black",
      "background-color":"white",

    }
  }


  getEvenStyle(e: number) {
    if ((e%2)==0) return this.Style.pair;
    return this.Style.impair;
  }

  SelectE(e: Etudiant) {
    this.selectedEtudiant = e;
  }

  protected readonly style = style;
}
