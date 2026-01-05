const fs = require('fs');
const path = require('path');
const { charList, bossList } = require('./nameList');

const timestamp = new Date().getTime() + '';
const fileName = `./public/anjin_used.json`;

const writeFile = (val) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(val, null, 2));
    console.log(`同步写入完成: ${fileName}`);
  } catch (err) {
    console.error(err);
  }
}

const filePath = path.join(__dirname, './public/anjin_.json');
const fileContent = fs.readFileSync(filePath, 'utf-8');
const newArray = JSON.parse(fileContent + '');

const classNames = charList.map(i => i.label);

const bossNames = bossList.map(i => i.label)


let result = [];
for (j = 0; j < classNames.length; j++) {
  let str0 = ""
  let children = [];
  const name = classNames[j];
  for (i = 0; i < bossNames.length; i++) {
    const array0 = newArray
      .filter(o => o.charName.includes(classNames[j]))
      .filter(o => o.dropBossName.includes(bossNames[i]))
      .map(o => ({ name: o.name, isMythic: o.isMythic }))

    // console.log('children', array0);
    // console.log('-----');
    children.push({ name: bossNames[i], children: JSON.parse(JSON.stringify(array0)) })
  }
  // console.log(children);

  result.push({ name, children });
}

// console.log(result);
writeFile(result)