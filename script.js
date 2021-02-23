var x1, x2, x3, x4; 
var y1, y2;
var A1, A2;
var z0, z1, z2, z3, z4;

z0 = 20 + Math.floor(Math.random() * (100 - 20)); //first 
z1 = Math.floor(Math.random() * 100 + 1); //for +
z2 = Math.floor(Math.random() * z0 - 1 ); //for -
z3 = Math.floor(Math.random() * 10);  //for *
console.log('first', z0, '\n+', z1, '\n-', z2, '\n*', z3/*, '\n/', z4*/);
x1 = 1; //+
x2 = 2; //-
x3 = 3; //*
x4 = 4; //"/"
var arr1 = [x1, x2, x3, x4];
var arrRand = Math.floor(Math.random() * 4);
console.log('rand arr -', arr1[arrRand]);

console.log('Z0_f', z0);
console.log('-----------------------');
if (arrRand == 3) {
for (var z4 = (2 + Math.floor(Math.random() * (7 - 2))); (z0 % z4 !== 0); z4++) {
 	console.log('AHAHAHHAHAAH DAI IST ARBEITE', z4);
} 
console.log('mmononoon', z4);
console.log('-----------------------');
}
switch(arr1[arrRand]) {
	case 1:
 				console.log('PLUS (+)');
 				var A1 = z0 + z1; 
 				console.log(A1);
			break;
	case 2:
			 		console.log('MIN (-)');
			 	 	var A1 = z0 - z2; 
			 		console.log(A1);
			break;
	case 3:
			 			console.log('UMN (*)');
			 	 		var A1 = z0 * z3; 
			 			console.log(A1);
			break;
	case 4:
			  		console.log('DELEN (/)');
			  	 	var A1 = z0 / z4; 
			 		console.log(A1.toFixed(2));	
			break;
}

function proverka() {
	let answerrr = document.getElementById('AnswerId');
	var inputAnswerValue = answerrr.value
	console.log(inputAnswerValue);
		if (inputAnswerValue == A1) {
			console.log('yes');
		}
		else {
			console.log('no');
		}
}


//------------------------------------------------------------
// Разобраться с вычитаением делением и умножением  - ✔
// сделать чтобы можно было вводить инпут - ✔
// Забирать валуе из инпута - ✔
// Добавить проверку инпута - 
// Добавить чтобы можно было выбирать действие - 
// Сделать нормальный дизайн - 
//------------------------------------------------------------
