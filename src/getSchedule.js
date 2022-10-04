const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const diasDaSemana = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};
const diasDisponiveis = (dia) => {
  const obj = { [dia]: diasDaSemana[dia] };
  return obj;
};
function getSchedule(scheduleTarget) {
  for (let index = 0; index < species.length; index += 1) {
    if (scheduleTarget === species[index].name) {
      return species.find((element) => element.name === scheduleTarget).availability;
    }
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return diasDisponiveis(scheduleTarget);
  }
  return diasDaSemana;
}

module.exports = getSchedule;
