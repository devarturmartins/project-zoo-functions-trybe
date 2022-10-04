const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childs = entrants.filter((element) => element.age < 18).length;
  const adults = entrants.filter((pessoas) => pessoas.age >= 18 && pessoas.age < 50).length;
  const seniors = entrants.filter((idosos) => idosos.age >= 50).length;
  const newObject = {
    child: childs,
    adult: adults,
    senior: seniors,
  };
  return newObject;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const client = countEntrants(entrants);
  let soma = 0;
  soma = client.child * prices.child + client.adult * prices.adult + client.senior * prices.senior;
  return soma;
}
module.exports = { calculateEntry, countEntrants };
