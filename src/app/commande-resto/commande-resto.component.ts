import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import{MENUS} from "../data";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-commande-resto',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './commande-resto.component.html',
  styleUrl: './commande-resto.component.scss'
})
export class CommandeRestoComponent implements OnInit{
  commandeForm:FormGroup= new FormGroup({
    prenom:new FormControl("", [Validators.required]),
    nom:new FormControl("", [Validators.required]),
    adresse:new FormControl(""),
    telephone:new FormControl("", [Validators.required]),
    commande:new FormArray([])
  });



  constructor(private _router: Router) {}

  ngOnInit(): void
  {
    for(let menu of MENUS)
    {
      this.getMenu.push(
        new FormGroup({
          nom: new FormControl(menu.nom),
          code: new FormControl(menu.code),
          prix: new FormControl(menu.prix),
          description: new FormControl(menu.description),
          categorie: new FormControl(menu.categorie),
          selected:new FormControl(false)
        })
      );
    }
  }

  get getMenu(): FormArray{
    return this.commandeForm.get("commande") as FormArray;
  }
  enregistrer() {

  }

  annuler() {

  }

  selectionne(i: number) {
    console.log(this.getMenu.controls[i].get('nom')?.value);
    this.getMenu.controls[i].get('selected')?.setValue(!this.getMenu.controls[i].get('selected')?.value);
  }
}
