const fs = require('fs');
const path = require('path');
const { charList, bossList } = require('./nameList');

const timestamp = new Date().getTime() + '';
const fileName = `./public/anjin_.json`;

const writeFile = (val) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(val, null, 2));
    console.log(`同步写入完成: ${fileName}`);
  } catch (err) {
    console.error(err);
  }
}

const filePath = path.join(__dirname, './public/origin.json');
const fileContent = fs.readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, '');
console.log(fileContent);
const originArray = JSON.parse(fileContent + '');

console.log(originArray.length);

const charToName = (arr) => {
  const result = arr.join(', ')
  let result2 = result;
  charList.forEach(i => {
    result2 = result2.replace(new RegExp(i.value, 'g'), i.label);
  })

  return result2;
}

const bossToName = (arr) => {
  if (!arr) return [];
  const result = arr.join(',')
  let result2 = result;
  bossList.forEach(i => {
    result2 = result2.replace(new RegExp(i.value, 'g'), i.label);
  })

  return result2.split(',')
}

originArray.forEach(element => {
  if (!element?.charName) {
    element.charName = charToName(element.char);
  }

  if (element.char.length >= charList.length - 2) {
    element.isAllChar = true;
  } else {
    element.isAllChar = false;
  }

  element.charName = element.charName.split(', ').filter(i => !!i)
  element.dropBossName = bossToName(element.dropBoss)
});

const newArray = originArray.map(i => {
  // if (i.isAllChar) i.charToName.push('全职业')
  return {
    name: i.name,
    isMythic: i.isMythic,
    charName: i.isAllChar ? ['全职业'] : i.charName,
    dropBossName: i.dropBossName,
  }
})

writeFile(newArray);
