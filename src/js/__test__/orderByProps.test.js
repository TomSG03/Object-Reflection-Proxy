import orderByProps from '../service';
import Zombie from '../Zombie';

test('test function orderByProps', () => {
  const obj = new Zombie('Victor');
  expect(orderByProps(obj, ['name', 'level', 'type'])).toEqual([
    { key: 'name', value: 'Victor' },
    { key: 'level', value: 1 },
    { key: 'type', value: 'Zombie' },
    { key: 'attack', value: 40 },
    { key: 'defence', value: 10 },
    { key: 'health', value: 100 },
  ]);
});

test('test function orderByProps - error in name propirties', () => {
  const obj = new Zombie('Victor');
  expect(orderByProps(obj, ['name', 'levels', 'type'])).toEqual([
    { key: 'name', value: 'Victor' },
    { key: 'type', value: 'Zombie' },
    { key: 'attack', value: 40 },
    { key: 'defence', value: 10 },
    { key: 'health', value: 100 },
    { key: 'level', value: 1 },
  ]);
});
