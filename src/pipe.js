import { default as pipeDataArr } from '../mock/pipeData.js';

function aquireData (pipeDataArr) {
	const res = pipeDataArr
				.slice(1) // 去除首行
				.map(lineArr => lineArr.join('--'))
				.filter(item => !!item) // 去除空行
				.map(line => line.split('--'))
				.filter(record => record[1].trim() === "India")
				.map(record => ({ city: record[0].trim(), phone: record[1].trim() })) // 格式化输出
	return res;
};

console.log(pipeDataArr);
console.log(aquireData(pipeDataArr));
