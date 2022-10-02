const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((idEspecifico) => idEspecifico.managers.some((e) => e === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees.filter((pessoas) => pessoas.managers.some((e) => e === managerId))
      .map((a) => `${a.firstName} ${a.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
