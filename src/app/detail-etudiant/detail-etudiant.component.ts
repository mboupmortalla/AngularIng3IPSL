import {Component, OnInit} from '@angular/core';
import {Carte, Etudiant} from "../IpslModele";
import {carteSylla, etudiantSylla} from "../data";
import {DatePipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-detail-etudiant',
  standalone: true,
  imports: [
    JsonPipe,
    DatePipe
  ],
  templateUrl: './detail-etudiant.component.html',
  styleUrl: './detail-etudiant.component.scss'
})
export class DetailEtudiantComponent implements OnInit {
  carte?: Carte ;
  etudiant?: Etudiant;

  ngOnInit(): void {
    this.carte=carteSylla;
    this.etudiant=carteSylla.etudiant;
  }
  getAnneeScolaire():string{
    if(this.carte?.anneeDebut)
    {
      return `${this.carte?.anneeDebut} - ${this.carte?.anneeDebut+1}`;
    }
    return "Annee non detereminee";
  }
}
