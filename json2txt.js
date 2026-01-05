const fs = require('fs');
const path = require('path');
const { charList, bossList } = require('./nameList');

const timestamp = new Date().getTime() + '';
const fileName = `./public/anjin_${timestamp}.txt`;

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


let str0 = ""
for (i = 0; i < bossNames.length; i++) {
  const array0 = newArray
    .filter(i => i.charName.includes(classNames[8]))
    .filter(i2 => i2.dropBossName.includes(bossNames[i]))
    .map(i2 => i2.name)
    .join('\n')

    console.log(i);
    console.log(bossNames[i]);
    console.log(array0);

  str0 = str0 + array0 + "\n\n"
}

fs.writeFileSync(fileName, str0)

// const workbook = XLSX.utils.book_new();
// function generateExcel(data) {
//   const worksheet = XLSX.utils.aoa_to_sheet([data]);
//   XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
// }

// generateExcel(['', ...bossNames]);
// XLSX.writeFile(workbook, `./public/output_${timestamp}.xlsx`);