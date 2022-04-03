// CommonJs导入通过给原型添加方法和属性那样添加属性和方法的module.exports对象, 对象引用不变
const { num, id, sayHi } = require('../mock/pipeData'); // 对象解构
console.log(num, id, sayHi());
console.log('i love cairangcao');


// CommonJs导入被直接赋值的module.exports对象, module.exports对象地址可能会被改
// const res = require('../mock/pipeData');
// console.log(res, typeof res);
