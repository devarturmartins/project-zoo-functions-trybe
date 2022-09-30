const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((animais) => animais.name === animal)
    .residents.every((idades) => idades.age >= age);  // seu código aqui
}

console.log(getAnimalsOlderThan('lions', 5));

module.exports = getAnimalsOlderThan;
