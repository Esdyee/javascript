//기본 매개변수
//매개변수를 입력하지 않았을 때 매개변수를 강제로 초기화하는 것을 기본 매개변수라고 한다.

function func(a,b,c){
	//매개변수 초기화
	if (!b) {b = 33;}
	if (!c) {c = 44;}

	//출력
	alert(a+","+b+","+c);

}

func(1,2)

/*
1,2,44가 출력된다.
즉, c에는 undifined이고, if문의 undefined는 false로 받아들이고, false의 부정문을 써서 True로 변환
c 변수를 할당하여 44를 입력
*/


//짧은 조건문 사용

function func(a,b,c){
	b = false || 33;
	c = false || 44;

	console.log(a+","+b+","+c);
}

func(1,2);

/*
b에 값이 들어와도 무조건 앞이 false이니까 33이 출력된다.
이 부분을 조금 헷갈렸다.
*/

function func(a,b,c){
	b = b || 33;
	c = c || 44;

	console.log(a+","+b+","+c);
}

func(1,2);

/*
b에 값이 있으면 b변수 선언후 argument b의 값을 할당한다.
없으면 기본값 33을 부여한다.
*/


//ECMAScript 6
//ES6부터는 기본 매개변수를 쉽게 만들 수 있는 문법을 제공합니다.

function func(a, b=33, c=44){
	console.log(a,b,c);
}

/* 결과값 테스트

func(1,2)
1 2 44

func(1)
1 33 44

func()
undefined 33 44

*/