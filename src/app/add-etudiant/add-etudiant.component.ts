import { Component } from '@angular/core';
import {Etudiant, EtudiantDTO, Filiere} from "../IpslModele";
import {listeDept, listeEtudiants} from "../data";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-etudiant',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    JsonPipe,
    NgIf
  ],
  templateUrl: './add-etudiant.component.html',
  styleUrl: './add-etudiant.component.scss'
})
export class AddEtudiantComponent {
  listFilieres: Filiere[]=[];
  etudiant:EtudiantDTO= {
    code:'',
    nom:'',
    prenom:'',
    adresse:'',
    email:'',
    telefone:'',
    codeClasse:'',
    codeFiliere:'',
    codeDept:''
    }
  listeDept=listeDept;
  listEtudiants=listeEtudiants;

  constructor(
    private _router: Router,
  ) {}

  listeFiliere() {
    console.log("liste filiere");
    this.listFilieres=[];
    if (!this.etudiant.codeDept){
      console.log("Pas de departement");
      return;
    }

    var filiereMap: Map<string, Filiere> = new Map();
    const etudiants = listeEtudiants;
    for (let i=0; i<etudiants.length; i++){
      var filiere:Filiere = etudiants[i].classe.filiere;
      console.log("filiere", filiere.code,"departement",filiere.dept.code);
      if (filiere.dept.code==this.etudiant.codeDept)
      {
        if (!filiereMap.has(filiere.code)) {
          filiereMap.set(filiere.code, filiere);
          this.listFilieres.push(filiere);
        }
      }
    }
  }

  enregistrer()
  {
    console.log("enregistrement de :",this.etudiant);
    for (let i=0 ; i<this.listEtudiants.length; i++){
      console.log("length= ",this.listEtudiants.length);
      var classe = this.listEtudiants[i].classe;
      console.log("etudiant classe ",classe.code,"forme code classe",this.etudiant.codeClasse);
      if (classe.code==this.etudiant.codeClasse
        && classe.filiere.code==this.etudiant.codeFiliere
        && classe.filiere.dept.code==this.etudiant.codeDept){
        var etu:Etudiant={
          code:this.etudiant.code,
          nom:this.etudiant.nom,
          prenom:this.etudiant.prenom,
          adresse:this.etudiant.adresse,
          email:this.etudiant.email,
          telefone:this.etudiant.telefone,
          classe:classe
        }
        this.listEtudiants.push(etu);
        this._router.navigate(['etudiants']);
        return;
      }


    }
  }

  annuler()
  {
    this._router.navigate(['acceuil']);
  }
}
