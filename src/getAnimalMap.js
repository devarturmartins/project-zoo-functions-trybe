const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const sendLocation = (param) => {
  const location = species.filter((e) => e.location === `${param}`).map((animal) => animal.name);
  return location;
};
const sendNames = (nomeAnimal) => {
  const nomEspecies = species.find((nome) => nome.name === nomeAnimal).residents.map((e) => e.name);
  // const espec = species.find((n) => n.name === nomeAnimal).name;
  return nomEspecies;
};
const sexFilter = (nomeAnimal, sexo) => {
  const nomEspecies = species.find((nome) => nome.name === nomeAnimal).residents
    .filter((e) => e.sex === sexo).map((element) => element.name);
  // const espec = species.find((n) => n.name === nomeAnimal).name;
  return nomEspecies;
};
const ordemAlfabetica = (nomeAnimal, sexo, sort) => {
  const objeto = sexo ? sexFilter(nomeAnimal, sexo) : sendNames(nomeAnimal);
  if (sort) {
    const objetoEmOrdem = objeto.sort();
    return objetoEmOrdem;
  }
  return objeto;
};
const objCompleto = (localizacao, sexo, sort) => {
  const animaisDaLocalizacao = sendLocation(localizacao);
  return animaisDaLocalizacao.map((animal) => {
    const newObj = {};
    newObj[animal] = ordemAlfabetica(animal, sexo, sort);
    return newObj;
  });
};
const semParam = () => {
  const newObj = { NE: sendLocation('NE'),
    NW: sendLocation('NW'),
    SE: sendLocation('SE'),
    SW: sendLocation('SW'),
  };
  return newObj;
};

function getAnimalMap(options) {
  if (!options) return semParam();
  if (options.includeNames) {
    const newObj = {
      NE: objCompleto('NE', options.sex, options.sort),
      NW: objCompleto('NW', options.sex, options.sort),
      SE: objCompleto('SE', options.sex, options.sort),
      SW: objCompleto('SW', options.sex, options.sort),
    };
    return newObj;
  }
  return semParam();
}

// console.log(sendNames('lions'));
//  console.log(objCompleto('NE', 'male')[0].lions);
module.exports = getAnimalMap;
