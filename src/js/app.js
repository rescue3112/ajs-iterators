import Person from './Person';

export default class Team {
  constructor() {
    this.teams = [];
  }

  add(char) {
    this.teams.push(char);
  }

  [Symbol.iterator]() {
    let i = -1;
    const { teams } = this;
    return {
      next() {
        i += 1;
        return {
          value: teams[i] ? new Person(teams[i]) : undefined,
          done: i >= teams.length,
        };
      },
    };
  }
}