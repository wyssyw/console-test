// import * as allData from "../mock/ES6Modules.js"; 
// console.log(allData);// { age: 23, default: { id: '1', sayHi: [Function: sayHi] }, name: 'wys' }

// import语句必须是先导入export default导出的数据,后面再是单个普通导出,顺序一定要正确否则报错。
// import defaultData, { age, name } from '../mock/ES6Modules.js';
// console.log(defaultData, age, name);

import {age, default as obj, name, schemaType} from "../mock/ES6Modules.js";
console.log(obj, age, name, schemaType);
