//Rect 생성자 함수

function Rect(width, height){
	this.width = width;
	this.height = height;
}

//프로토타입
Rect.prototype.getArea = function () {
	return this.width * this.height;
}

var rect = new Rect(10, 20);

console.log(rect.getArea())


//위의 예제를 조금 더 이어가본다.
//rect에 width값 변경

rect.width = -10;

console.log(rect.getArea())

/*
계산은 정상적으로 -200을 출력
그러나 -200의 넓이를 갖는 사각형 존재 X
단순하게 음수가 안들어가면 문제 X
그러나 애당초 음수를 못받게 하기 하면 됨.
그래서 캡슐화 사용.
*/



//캡슐화
function Rect(w, h){
	var width = w;
	var height = h;

	this.getWidth = function() {return width;}
	this.getHeight = function() {return height;}

	this.setWidth = function(w){
		width = w;
	}

	this.setHeight = function(h){
		height = h;
	}
}

var rect = new Rect(10, 20);
console.log(rect.width);

/*
	확인해 보면 rect.width는 undefined;
	혹시나 싶어 rect.width에 값 할당
*/

rect.width = 5;
console.log(rect.getWidth());

/*
rect.width는 새로운 속성이 만들어 져서 거기에 5를 대입하고
기존에 만들어졌던 지역함수 width는 getWidth함수를 통해 접근 가능하다.
*/





//게터와 세터

//생성자 함수 Rect
function Rect(w, h){
	var width = w;
	var height = h;

	this.getWidth = function() {return width;}
	this.getHeight = function() {return height;}

	this.setWidth = function(w){
		if(w < 0){
			throw '길이는 음수일 수 없습니다.'
		} else{
			width = w;
		}
	}
}

//프로토타입 getArea함수
Rect.prototype.getArea = function(){
	return this.getWidth() * getHeight();
}

//객체생성
var rect = new Rect(5,7);

//rect에 넓이값 음수삽입
//Error Point
rect.setWidth(-2);

//에러로 인해 출력 못함
console.log('AREA :', rect.getArea())

/*
get이름() 함수명처럼 return으로 값을 가져 온 것을 게터
set이름() 함수명처럼 값을 입력하는 것을 세터
게터와 세터가 있다고 해서 캡슐화는 아님.
게터와 세터가 사용자의 잘못된 사용을 막아주는 것을 캡슐화라고 함.
*/