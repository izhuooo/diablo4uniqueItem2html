# 暗黑4暗金转html

## 注意事项
1. 推荐你使用`pnpm`

## 使用教程
  1. 去[暗黑核](https://www.d2core.com/d4/data/uniqueItem)把json下载下来
  2. 放到public文件夹下，并替换origin.json
  3. npm i 安装依赖
  4. 检查nameList.js里面的数据是否有变动
  5. npm run create 使用 create.js剔除无用信息，生成精简的数组
  6. npm run create2 基于步骤4使分类数组
  7. 使用npm run dev 启动web服务，访问localhost:3000即可查看内容

## TODO
1. 没有charName就补充 ✓
2. dropBoss转为dropBossName ✓
3. char等于8就是全职业，添加isAllChar ✓
4. charName格式化为数组 ✓
5. 动态渲染到html ✓
6. 增加截图按钮，截屏html有效内容并导出到图片并下载 ✓
7. html动态输入json链接，后台自动生成数据，就不需要使用教程里面的1和2
