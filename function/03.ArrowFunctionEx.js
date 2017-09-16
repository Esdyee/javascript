//익명 함수 = 함수 자체에 바인딩 되어 있는 객체
//화살표 함수 = 전역 객체

const multiply = (a,b) => a * b;

/*
즉, 익명함수를 변수에 담아서 사용하는 것을 축약한 언어로 보인다.
const multiply는 ES6에서 사용하는 변수이고 여기에
function(a,b)를 (a,b) =>로 줄이고,
중괄호(Scope) 생략하고,
코드 구문을 넣는다.
*/