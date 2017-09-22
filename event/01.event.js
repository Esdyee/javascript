/*이벤트 종류

- 마우스 이벤트
- 키보드 이벤트
- HTML 프레임 이벤트
- HTML 입력 양식 이벤트
- 유저 인터페이스 이벤트
- 구조 변화 이벤트
- 터치 이벤트
*/


//window 객체의 load 이벤트
//아래처럼 window객체의 onload 속성에 함수를 할당하는 것을
//이벤트를 연결한다고 한다.
window.onload = function(){

};

/*
load를 이벤트 이름 혹은 이벤트 타입이라고 한다.
onload를 이벤트 속성이라고 한다.
onload에 할당 된 함수를 이벤트 리스너 혹은 이벤트 핸들러라고 한다.
*/

window.onload = function(){

	var header = document.getElementById("header");

	function whenClick() {alert("CLICK");}
	header.onclick = whenClick;

}

/*
header --> 변수 선언
document.getElementById()함수가 'header'라는 객체를 반환해서 header변수에 할당
onclick은 이벤트 속성
whenClick은 이벤트 리스너 혹은 핸들러
*/


