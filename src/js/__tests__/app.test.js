import description from '../app';

test('Извлекаем массив с нужными полями', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]	
  };
  const result = description(character);
  const expected = [
    {
      description: 'Двойной выстрел наносит двойной урон',
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
    },
    {
      description: 'Описание недоступно',
      icon: 'http://...',
      id: 9,
      name: 'Нокаутирующий удар',
     },
  ];
  expect(result).toEqual(expected);
});
