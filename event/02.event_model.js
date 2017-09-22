/*이벤트 모델

고전 이벤트 모델은 자바스크립트에서 문서 객체의 이벤트 속성.
이벤트를 연결하는 방법.
*/

window.onload = function(){
	var header = document.getElementById('header');

	//이벤트 연결부분
	header.onclick = function () {
		alert("click");

		//이벤트 제거
		header.onclick = null;
	}
}

/*
위의 구문을 실행하면 한번만 이벤트가 실행되고 두번째부터는 클릭을 해도 alert창이 나타나지 않는다.
최초에 header.onclick에 alert("click")을 호출한다.
그리고 다음에 이어지는 header.onclick = nul;로 인해 onclick에 함수가 삭제된다.
그렇기 떄문에 h2를 클릭해도 아무런 반응이 없는 것이다.
*/