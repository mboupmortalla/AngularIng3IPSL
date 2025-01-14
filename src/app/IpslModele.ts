export interface Departement {
  code: string;
  nom: string;
  description?: string;
}

export interface Filiere {
  code: string;
  nom: string;
  description?: string;
  dept: Departement;
}

export interface Classe{
  code: string;
  nom: string;
  description?: string;
  filiere: Filiere;
}

export interface Etudiant{
  code: string;
  nom: string;
  prenom: string;
  adresse: string;
  telefone: string;
  email: string;
  classe: Classe;
}

export interface EtudiantDTO{
  code: string;
  nom: string;
  prenom: string;
  adresse: string;
  telefone: string;
  email: string;
  codeClasse: string;
  codeFiliere: string;
  codeDept: string;
}

export interface Carte{
  id: number;
  dateDel: Date;
  anneeDebut: number;
  etudiant: Etudiant;
  payante:boolean;

}

export interface MenuResto{
  code: string;
  nom: string;
  description?: string;
  prix:number;
  categorie: string;
}
