var A1, A2;
var z0, z1, z2, z3, z4; 

z0 = 20 + Math.floor(Math.random() * (100 - 20)); //first 
z1 = Math.floor(Math.random() * 100 + 1); //for +
z2 = Math.floor(Math.random() * z0 - 1 ); //for -
z3 = Math.floor(Math.random() * 10);  //for *


console.log('F', z0, '\n+', z1, '\n-', z2, '\n*', z3);


var arr1 = [1, 2, 3, 4];
var arrRand = Math.floor(Math.random() * 4);
console.log('randomArr = ', arr1[arrRand]);


if (arrRand == 3) { 
for (var z4 = (2 + Math.floor(Math.random() * (7 - 2))); (z0 % z4 !== 0); z4++) {
 	//console.log('/ +1', z4);
} 
console.log('Delim na', z4);
console.log('<----------------------->');
}


let NumFirstHtml = document.getElementById('first');
let NumSecondHtml = document.getElementById('second');
let ZnakHtml = document.getElementById('znak');
NumFirstHtml.value = z0;
NumFirstHtml.textContent = z0;

switch(arr1[arrRand]) { 
	case 1:
 				console.log('PLUS (+)');
 				var A1 = z0 + z1; 
 				NumSecondHtml.textContent = z1;
				ZnakHtml.textContent = "+";
 				console.log('answer = ', A1, '\n', NumSecondHtml.textContent, '\n', ZnakHtml.textContent);
			break;
	case 2:
			 		console.log('MIN (-)');
			 	 	var A1 = z0 - z2; 
					NumSecondHtml.textContent = z2;
					ZnakHtml.textContent = "-";
			 		console.log('answer = ', A1, '\n', NumSecondHtml.textContent, '\n', ZnakHtml.textContent);
			break;
	case 3:
			 			console.log('UMN (*)');
			 	 		var A1 = z0 * z3; 
			 	 		NumSecondHtml.textContent = z3;
						ZnakHtml.textContent = "*";
			 			console.log('answer = ', A1, '\n', NumSecondHtml.textContent, '\n', ZnakHtml.textContent);
			break;
	case 4:
			  		console.log('DELEN (/)');
			  	 	var A1 = z0 / z4; 
			  	 	NumSecondHtml.textContent = z4;
					ZnakHtml.textContent = "/";
			 		console.log('answer = ', A1.toFixed(2), '\n', NumSecondHtml.textContent, '\n', ZnakHtml.textContent);	
			break;
}

function CheckParagr() {
	let answerParagraph = document.getElementById('answerPharagr');
	let answerrr = document.getElementById('AnswerId');
			if (answerrr.value == A1) {
				answerParagraph.textContent = 'Recht!';
			}
			else {
				answerParagraph.textContent = 'Falsch!';
			}
}
