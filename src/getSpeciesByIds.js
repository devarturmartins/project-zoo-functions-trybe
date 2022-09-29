const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((especies) => ids.some((idsAnimais) => idsAnimais === especies.id));
}

module.exports = getSpeciesByIds;
