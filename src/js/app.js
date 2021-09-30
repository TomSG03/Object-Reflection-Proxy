import Zombie from './Zombie';
import orderByProps from './service';

const obj = new Zombie('Viktor');

const props = orderByProps(obj, ['name', 'level', 'type']);

console.log(props);
