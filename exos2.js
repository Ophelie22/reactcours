
/*
À ma guise
==========
Des données nous sont parvenues d'un serveur, mais la structure n'est pas top. 
Changeons le format de ces données !
Objectifs
---------
- Une propriété "name" qui ressemblerait à "Prénom Nom"
- Une propriété "young" qui contiendrait un booléen : 
  `true` quand le personnage a moins de 50 ans, sinon `false`
- Les autres données sont inutiles, on ne les conserve pas


Notions
-------
- Array : map
- String : template strings
*/

// objectif : par exemple pour le premier élément du tableau, on voudrait
/*
{
    name: 'Marge Simpson',
    young: true
}
*/

const data = [
  {
    firstname: 'Marge',
    lastname: 'Simpson',
    gender: 'Women',
    age: 34,
  },
  {
    firstname: 'Ned',
    lastname: 'Flanders',
    age: 61,
  },
  {
    firstname: 'Charles Montgomery',
    lastname: 'Burns',
    age: 104,
  },
  {
    firstname: 'Waylon',
    lastname: 'Smithers',
    age: 36,
  },
];

//const characters = data.map(/* ... */);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// map : obtenir un nouveau tableau qui est le résultat de la transformation de chaque
// élément d'un premier tableau. Le premier tableau n'est pas modifié.

// https://developer.mozilla.org/fr/docs/Glossaire/Fonction_de_rappel
// on fournit une callback, map va l'appeler sur chacun des éléments du tableau, et
// placera tous les résultats dans un nouveau tableau

// la callback doit retourner une valeur => c'est cette valeur qui sera placée dans
// le nouveau tableau

// fléchée : nouvelle syntaxe ES6 pour les fonctions :
// - enlever le mot "function"
// - ajouter une => avant le corps de la fonction (avant "{" )

const characters = data.map(function(element) {
  // console.log(element); // chaque élément du tableau, successivement

  // calcul pour young
  //let isYoung;
 // if (element.age < 50) {
 //   isYoung = true;
  //} else {
   // isYoung = false;
  //}

  // je crée un nouvel objet avec les informations transformées
  const transformedElement = {
    name: element.firstname + ' ' + element.lastname,
    // syntaxe ES6, template string (littéral de gabarit)
    // ` backtick : au début et à la fin
    // ${} pour une information à remplacer
   
    // avec variable intermédiaire
    //young: isYoung
    / sans variable intermédiaire
    // ternaire : (condition ? valeur si vrai : valeur si faux)
    young: (element.age < 50 ? true : false)
  };

  // return /* l'élément transformé */
  return transformedElement;
});

console.log('tableau initial', data); // le tableau n'a pas été modifié
console.log('résultat', characters);



/*
 * Tests
 */
const result = document.getElementById('test');
if (
  // On a désormais `name` et `young`
  characters[0].name === 'Marge Simpson'
  && characters[1].name === 'Ned Flanders'
  && characters[2].name === 'Charles Montgomery Burns'
  && characters[3].name === 'Waylon Smithers'
  && characters[0].young
  && !characters[1].young
  && !characters[2].young
  && characters[3].young
  // Les anciennes props ne doivent plus être définies
  && typeof characters[0].gender === 'undefined'
  && typeof characters[0].firstname === 'undefined'
  && typeof characters[0].lastname === 'undefined'
  && typeof characters[1].firstname === 'undefined'
  && typeof characters[1].lastname === 'undefined'
  && typeof characters[2].firstname === 'undefined'
  && typeof characters[2].lastname === 'undefined'
  && typeof characters[3].firstname === 'undefined'
  && typeof characters[3].lastname === 'undefined'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
