//	javascript　的函式寫法
 function sub(a,b){
	return a-b;
 }
 
 console.log(sub(5,2));
 
//	第二種寫法 宣告了一個「匿名函數」之後，再把這個函數「塞給」一個變數。

var add = function(a,b){
	return a+b;
}
console.log(add(5,7));