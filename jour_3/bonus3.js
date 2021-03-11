var laTeam = ['Abdou', 'Amara', 'Amir', 'Medhi', 'Farouk', 'Fasulu', 'Ikram', 'Lionel', 'Karim', 'Moncef', 'Mugilan', 'Asma', 'Rocio', 'Sabrina', 'Lucas', 'Suleman', 'Axel', 'Bakagnan', 'Fethy', 'Sabrina', 'Francisco'];

var max = laTeam.length - 1;

var indexRandom = Math.floor(Math.random() * (max +1));

console.log("Le gagnant est: ",laTeam[indexRandom]);
