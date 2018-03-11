//	 javascript dictionary 用法 key 與 value 的對應關係
var dict={name:"zack",age:28};

dict["emil"] = "holyzack1123@hotmail.com";
dict.tel = "02-24348346";
//	把 dict 裡面的所有對應 key 和 value 印出來
for(var key in dict){
	console.log("key =",key,"value =",dict[key]);
}

console.log("age =",dict.age);
console.log("birthday =",dict["birthday"]);