/**
 * fs 内置文件模块
 */
const fs = require('fs');
const path = require('path');

const getFileData = (filename) => {
  return new Promise((resolve, reject) => {
    const fullFilename = path.resolve(__dirname, 'data', filename);
    fs.readFile(fullFilename, (err, data) => {
      if (err) return reject(err);
      resolve(JSON.parse(data.toString()))
    })
  });
};

const writeFileData = (filename, content) => {
  return new Promise((resolve, reject) => {
    const fullFilename = path.resolve(__dirname, 'data', filename);
    fs.writeFile(fullFilename, content, (err) => {
      if (err) return reject(err);
      console.log(filename);
      resolve()
    })
  });
};

const copyFile = (fromFile, toFile) => {
  return new Promise((resolve, reject) => {
    const fullFromFile = path.resolve(__dirname, 'data', fromFile);
    const fullToFile = path.resolve(__dirname, 'data', toFile);
    fs.copyFile(fullFromFile, fullToFile, (err) => {
      if (err) return reject(err);
      console.log(fullToFile);
      resolve()
    })
  });
};

const mkdir = (dir) => {
  return new Promise((resolve, reject) => {
    const fullFileDir = path.resolve(__dirname, 'data', dir);
    fs.mkdir(fullFileDir, (err) => {
      if (err) return reject(err);
      console.log(fullFileDir);
      resolve()
    })
  });
};

// 异步读取文件
// getFileData('a.json').then(res => {
//   console.log('res:', res);
//   return getFileData(res.next)
// }).then(res => {
//   console.log('res:', res);
//   return getFileData(res.next)
// }).then(res => {
//   console.log('res:', res);
// })

// 同步读取文件
// console.log(fs.readFileSync(path.resolve(__dirname, 'data', 'a.json')).toString());
// console.log(fs.readFileSync(path.resolve(__dirname, 'data', 'b.json')).toString());
// console.log(fs.readFileSync(path.resolve(__dirname, 'data', 'c.json')).toString());

// 异步写入文件数据
// writeFileData('a.json', JSON.stringify({ 
//   "message": "这是a.json文件",
//   "next": "b.json",
//   "id": 1
// }));
// writeFileData('b.json', JSON.stringify({ 
//   "message": "这是b.json文件",
//   "next": "c.json",
//   "id": 2
// }));
// writeFileData('c.json', JSON.stringify({ 
//   "message": "这是c.json文件",
//   "next": null,
//   "id": 3
// }));

// 同步写入文件数据
// const a = { "message": "这是a.json文件", "next": "b.json", };
// const b = { "message": "这是b.json文件", "next": "c.json", };
// const c = { "message": "这是c.json文件", "next": null, };
// fs.writeFileSync(path.resolve(__dirname, 'data', 'a.json'), JSON.stringify(a));
// fs.writeFileSync(path.resolve(__dirname, 'data', 'b.json'), JSON.stringify(b));
// fs.writeFileSync(path.resolve(__dirname, 'data', 'c.json'), JSON.stringify(c));

// 异步复制文件
// copyFile('c.json', 'd.json');

// 同步复制文件
// fs.copyFileSync(path.resolve(__dirname, 'data', 'd.json'), path.resolve(__dirname, 'data', 'e.json'));

// 异步创建目录
// mkdir('asyncMkdir');

// 同步创建目录
// fs.mkdirSync(path.resolve(__dirname, 'data', 'syncMkdir'));