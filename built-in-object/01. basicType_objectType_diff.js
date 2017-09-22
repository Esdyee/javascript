/*
- 기본자료형과 객체의 차이점
기본 자료형은 자바스크립트의 여섯 가지 자료형 중 숫자, 문자열, 불 세가지 자료형을 의미한다.
*/




//변수 선언
var primitiveNumber = 273;
var objectNumber = new Number(273);

//출력
var output = '';
output += typeof (primitiveNumber) + ' : ' + primitiveNumber + '\n';
output += typeof (objectNumber) + ' : ' + objectNumber;
console.log(output);

/*
primitiveNumber ==> Number 타입이다.
그러나 속성과 메서드를 사용할 수 있다.
이는 primitiveNumber가 자동으로 Number 객체로 변환되기 떄문이다.
그래서 Number 객체의 속성과 메서드를 사용할 수 있다.

기본 자료형은 객체가 아니므로 속성과 메서드를 추가할 수는 없다.
*/

