const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const objVazio = {};
  if (animal === undefined) {
    species.forEach((elemento) => {
      objVazio[elemento.name] = elemento.residents.length;
    });
    return objVazio;
  }
  if (Object.keys(animal).length === 1) {
    return species.find((elemento) => elemento.name === Object.values(animal)[0]).residents.length;
  }
  if (Object.keys(animal).length === 2) {
    return species.find((e) => e.name === Object.values(animal)[0])
      .residents.filter((element) => element.sex === Object.values(animal)[1]).length;
  }
}
console.log(countAnimals({ specie: 'lions', sex: 'female' }));
module.exports = countAnimals;
