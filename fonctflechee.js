//Rappel des fonctions flechées

//addition avec 
//nombreA
//nombreB
//Faire une fonction fléchee qui va ns retouyrner le résultat
// console.log(addition(5,4));//9


// Fonctions fléchées
let addition = (nombreA, nombreB) => nombreA + nombreB;
console.log (addition(5,4));
//Ici les parenthese ne st pas ncr car il y a qu'1 parametre
let direaurevoir = prenom => 'Au revoir ' + prenom;
console.log(direaurevoir('Nicolas'))

//creation d'une fonction q va afficher les nbr +grd que 10
const price = [1, 2, 4, 6, 12, 56, 89];

// let plusGrandQue10 = price.filter(function(p) {
//   return p > 10;
// });
// console.log(plusGrandQue10);//[12,56,89]
//je vais stocker mes elements ds une variable p grace a la fct filter


//Grace aux fct flechee je peux faire cela plus rapidement
let plusGrandQue10 = price.filter(p => p > 10);
//pas besoin de pararenthes il y a 1 seul parametre pni le mot clef return
console.log(plusGrandQue10);//[12,56,89]
