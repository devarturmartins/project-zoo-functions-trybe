const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((animais) => animais.name === animal)
    .residents.every((idades) => idades.age >= age);
}

module.exports = getAnimalsOlderThan;
