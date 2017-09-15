함수

익명함수의 실행순서


function sumAll(){
	//alert(typeof(arguments) + ':' + arguments.length);
	alert(arguments.length);
	var output = 0;

	for(var i=0; i < arguments.length; i++){
		output += arguments[i];
	}
	return output;
}

alert(sumAll(1,2,3,4,5,6,7,8))

화살표 함수


프로토타입

var func = function() {
	//alert(1);
	var output = prompt('숫자를 입력해주세요.', '숫자')
	alert(output);
}

alert(func);
alert(prompt);

<script>
	func();
	var func = function() {alert('Func A');};
	var func = function() {alert('Func B');};
</script>

<script>
	var func = function() {alert('Func A');};
	var func = function() {alert('Func B');};

	func();
</script>


function sumAll(){
	alert(typeof (arguments) + ':' + arguments.length);
}

function sumAll() {
	var output = 0;
	for(var i = 0; i < arguments.length; i++){
		ouput += arguments[i];
	}
	return output;
}