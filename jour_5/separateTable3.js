// 03 - Separate Table
// • Créez un fichier table-utils.js
// • Mettez votre fonction multiply dans ce fichier, et ajouter en une deuxieme addition qui reprend le même principe mais avec une addition au lieu d'une multiplication
// • Exportez les deux fonctions graces aux modules, et importez les dans votre fichier précedant pour refaire marcher votre code
// • Affichez la table d'addition

var {multiply, add} = require('./table_utils');
// var number = parseInt(process.argv[2]);
var number = parseInt(process.argv.slice(2));

console.log(add(number)) ;
console.log(multiply(number)) ;