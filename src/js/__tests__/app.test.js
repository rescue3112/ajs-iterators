import Team from '../app';

test('Проверка итератора по команде игроков', () => {
  const team = new Team();
  team.add({
    name: 'Лучник1',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
  team.add({
    name: 'Лучник2',
    type: 'Bowman',
    health: 50,
    level: 2,
    attack: 40,
    defence: 10,
  });
  expect([...team]).toEqual([{
    name: 'Лучник1',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }, {
    name: 'Лучник2',
    type: 'Bowman',
    health: 50,
    level: 2,
    attack: 40,
    defence: 10,
  }]);
});
