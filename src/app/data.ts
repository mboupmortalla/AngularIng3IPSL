import {Carte, Classe, Departement, Etudiant, MenuResto} from "./IpslModele";

export var deptGIT: Departement ={
  code:"GIT",
  nom:"Genie Informatique et Telecomminucation"
};

export var deptGeC: Departement ={
  code:"GeC",
  nom:"Genie Civil"
};

export var deptGEM: Departement ={
  code:"GEM",
  nom:"Genie Electro-Mecanique"
};

export var listeDept: Departement[] =[deptGIT,deptGeC,deptGEM];

export var ing3Info : Classe={
  code:"ING3",
  nom:"Ing 3 informatique",
  filiere:{code:"INF",nom:"Informatique",dept:deptGIT},

}
export var ing3Civil : Classe={
  code:"ING3",
  nom:"Ing 3 Civil",
  filiere:{code:"CIV",nom:"Civil",dept:deptGeC},

}

export var etudiantSylla: Etudiant={
  code:"P3156",
  nom:"Sylla",
  prenom:"Ablaye",
  adresse:"Ocass, Kaolack",
  email:"syllaAblaye@gmail.com",
  telefone:"768964523",
  classe:ing3Info
}

export var listeEtudiants:Etudiant []=[
  {
    code:"P3196",
    nom:"Mbaye",
    prenom:"Modou",
    adresse:"Kolda",
    email:"MbayeModou@gmail.com",
    telefone:"789874309",
    classe:ing3Civil
  },
  etudiantSylla,
  {
    code:"P3126",
    nom:"Ndiaye",
    prenom:"Ramatoulaye",
    adresse:"Dakar",
    email:"NdiayeRama@gmail.com",
    telefone:"786452309",
    classe:ing3Info
  },
  {
    code:"P3136",
    nom:"Ndiaye",
    prenom:"Fatou",
    adresse:"Saint-Louis",
    email:"NdiayeFatou@gmail.com",
    telefone:"782562309",
    classe:ing3Civil
  },

  {
    code:"P3101",
    nom:"Sall",
    prenom:"Mame Khady",
    adresse:"Mbour",
    email:"SallKhady@gmail.com",
    telefone:"786373930",
    classe:ing3Info
  }
]

export var carteSylla : Carte ={
  id:278176,
  anneeDebut:2024,
  dateDel: new Date(Date.parse("2024-06-01")),
  etudiant:etudiantSylla,
  payante:false
}

export const CATEGORIES=["vegetarien","fast-food","senegalais","africain"];
export var MENUS:MenuResto[] =[
  {
    code:"RAP",
    nom:"Riz au poisson",
    prix:3500,
    categorie:CATEGORIES[2]
  },
  {
    code:"CM",
    nom:"Coucous Marocaine",
    prix:2500,
    categorie:CATEGORIES[3]
  },
  {
    code:"YP",
    nom:"Yassa poulet",
    prix:5500,
    categorie:CATEGORIES[2]
  },
  {
    code:"DMD",
    nom:"Domada",
    prix:3500,
    categorie:CATEGORIES[2]
  },
  {
    code:"HBG",
    nom:"Hamburger",
    prix:2000,
    categorie:CATEGORIES[1]
  }
]
