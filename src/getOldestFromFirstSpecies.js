const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animais = employees.find((e) => e.id === id).responsibleFor[0];
  const idadeMaisVelho = species.find((element) => element.id === animais)
    .residents.reduce((acc, curr) => {
      if (curr.age > acc) {
        return curr.age;
      }
      return acc;
    }, 0);
  const animalVelho = species.find((e) => e.id === animais)
    .residents.find((element) => element.age === idadeMaisVelho);
  return Object.values(animalVelho);
}
console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
module.exports = getOldestFromFirstSpecies;
