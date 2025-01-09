import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeEnseignantComponent } from './liste-enseignant/liste-enseignant.component';
import { Error404Component } from './error404/error404.component';
import {DetailEtudiantComponent} from "./detail-etudiant/detail-etudiant.component";

export const routes: Routes = [
    {path: "",redirectTo:"/acceuil",pathMatch:'full'},
    {path: "acceuil",component:AccueilComponent},
    {path:"etudiants",component:ListeEtudiantComponent},
    {path:"enseignants",component:ListeEnseignantComponent},
    {path:"detailEtudiant",component:DetailEtudiantComponent},
    {path:"**",component:Error404Component}
];
