export default function orderByProps(obj, arr) {
  const propDefine = [];
  const propFree = [];

  arr.forEach((element) => {
    if (element in obj) {
      propDefine.push({ key: element, value: obj[element] });
    }
  });

  for (const key in obj) {
    if (!arr.includes(key)) {
      propFree.push({ key, value: obj[key] });
    }
  }

  propFree.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...propDefine, ...propFree];
}
