'use strict';
//	es6 功能:區域範圍的 let 宣告
const sentences =[
	{ subject: 'Javascript', verb:'is', object: 'great' },
	{ subject: 'Elephants', verb:'are', object: 'large' },
];

//	es6 功能:物件解構

function say({subject, verb, object}){
	//	es6 功能:範本字串
	console.log(`${subject} ${verb} ${object}`);
}

// es6 功能:for..of

for(let s of sentences){
	say(s);
}
