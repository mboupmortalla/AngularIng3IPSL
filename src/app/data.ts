import {Carte, Classe, Departement, Etudiant} from "./IpslModele";

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
