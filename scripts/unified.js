// 一键同步 G2Plot v2 API 文档
const fs = require('fs');
const path = require('path');
const remark = require('remark');
const { mdprima } = require('./mdprima.js');

// 文件路径，上层自动扫描
const filePath = path.resolve(__dirname, '../../G2Plot/examples/scatter/basic/API.zh.md');

const res = remark().use(mdprima).processSync(fs.readFileSync(filePath));

fs.writeFileSync(path.resolve(__dirname, './API.zh.md'), res.contents);
