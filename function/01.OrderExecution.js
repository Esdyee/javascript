//자바스크립트 실행순서

alert('A');
setTimeout(function (){
	alert('B');
},0);
alert('C');

/*
예상 실행순서 A,B,C
실제 실행순서 A,C,B
setTimeout 함수가 걸려 있으면 해당 함수는 다른 코드의 실행이 끝나기 전에는 실행되지 않는다.
*/



//반복문과 콜백 함수

for(var i = 0 ; i < 3; i ++){
	setTimeout(function () {
		alert(i);
	},0)
}

/*
예상 출력 결과 0,1,2
실제 출력 결과 3,3,3
*/


//반복문과 콜백 함수(해결방안 1)
//클로저를 활용한 해결

for (var i = 0; i < 3; i ++){
	(function (closure){
		setTimeout(function (){
			console.log(closure);
		},0);
	})(i);
}

/*
결과가 0, 2, 1 순으로 나온다.(alert)
console.log로하니 0,1,2 정상적으로 나온다.
*/



//반복문과 콜백 함수(해결방안 2)
//forEach() 메서드를 활용한 클로저 생성

[0,1,2].forEach(function (i) {
	setTimeout(function () {
		alert(i);
	},0);
});