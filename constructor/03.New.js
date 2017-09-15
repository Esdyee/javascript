//new 키워드 사용했을 경우

function Constructor(value){
	this.value = value;
}

var constructor = new Constructor('Hello');

console.log(constructor.value);


//new 키우드 사용 X

function Constructor(value){
	this.value = value;
}

var constructor = Constructor('Hello');

console.log(value);

/*
new 키워드를 사용하지 않으면 this가 window 객체를 가르킴
Constructor 실행하면
window.value = value;
으로 실행됨

즉 본래 속성 불러올 때 window 객체의 속성을 불러올때는 생략해도 되므로
console.log(value);
alert(value);

해도 window.value에 Hello가 담겨있기 때문에 출력 됨
*/