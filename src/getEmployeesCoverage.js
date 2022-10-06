const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const buscaNome = (p) => {
  const primeiroNome = employees.find((nomes) =>
    nomes.firstName === p.name || nomes.lastName === p.name || nomes.id === p.id).firstName;
  const ultimoNome = employees.find((nomes) =>
    nomes.firstName === p.name || nomes.lastName === p.name || nomes.id === p.id).lastName;
  return `${primeiroNome} ${ultimoNome}`;
};
const idDaPessoa = (id) => {
  const idBuscado = employees.find((nomes) =>
    nomes.firstName === id.name || nomes.lastName === id.name || nomes.id === id.id).id;
  return idBuscado;
};
// const buscaPeloId = (id) => employees.find((e) => e.id === id.id);
const responsavel = (obj) => {
  const idAnimais = employees.find((nome) =>
    nome.firstName === obj.name || nome.lastName === obj.name || nome.id === obj.id).responsibleFor;
  const nomeAnimais = species.filter((element) => idAnimais.includes(element.id));
  return nomeAnimais.map((e) => e.name);
};
const localidade = (animais) => {
  const arrayDeAnimais = employees.find((nomes) =>
    nomes.firstName === animais.name || nomes.lastName === animais.name || nomes.id === animais.id)
    .responsibleFor;
  const especiesDoID = species.filter((e) => arrayDeAnimais.includes(e.id));
  return especiesDoID.map((e) => e.location);
};
const todosFunc = () => {
  const array = [];
  const namesFunc = employees.map((e) => e.firstName);
  namesFunc.forEach((e) => {
    const idTodos = employees.find((id) => e === id.firstName).id;
    const nomeTodos = employees.find((names) => e === names.firstName).firstName;
    const ultimoNomeTodos = employees.find((sobrenome) => e === sobrenome.firstName).lastName;
    const gerenciaAnimais = employees.find((animals) => e === animals.firstName).responsibleFor;
    const gereciaAnimaisNome = species.filter((an) => gerenciaAnimais.includes(an.id))
      .map((em) => em.name);
    const localiz = species.filter((eleme) => gerenciaAnimais.includes(eleme.id))
      .map((el) => el.location);
    array.push({
      id: idTodos,
      fullName: `${nomeTodos} ${ultimoNomeTodos}`,
      species: gereciaAnimaisNome,
      locations: localiz });
  });
  return array;
};
// const nomeFuncioarios = ['Nigel', 'Burl', 'Ola', '']
function getEmployeesCoverage(objeto) {
  if (objeto === undefined) {
    return todosFunc();
  }
  const verificacao = employees.some((e) =>
    Object.values(objeto)
      .includes(e.firstName) || Object.values(objeto)
      .includes(e.lastName) || Object.values(objeto).includes(e.id));
  if (verificacao) {
    const novoObj = {
      id: idDaPessoa(objeto),
      fullName: buscaNome(objeto),
      species: responsavel(objeto),
      locations: localidade(objeto),
    };
    return novoObj;
  }
  throw new Error('Informações inválidas');
}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
