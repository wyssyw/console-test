// 写法一
// CommonJs导出module.exports对象,类似在原型上添加属性和方法的写法
module.exports.num = 123; 
module.exports.id = '111'; 
module.exports.sayHi = function () {
	return 'hello world!';
};



// 写法二: 直接给module.exports对象赋值的写法

// 单独导出一个对象
// module.exports = {
// 	name: "蛙人",
// 	age: 24,
// 	sex: "male"
// }

// 单独导出一个函数
// module.exports = function () {
// 	 return {
// 		 name: 'wyser',
// 		 age: 22
// 	 }
// }

// 导出多种类型数据
// module.exports = 1234;
// module.exports = '1234';
// module.exports = {
// 	name: 'wys',
// 	age: 23
// }
