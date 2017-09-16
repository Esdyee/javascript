//전개 연산자

function func(a,b, ...num){
	console.log(num);
}

/*
func(1,2,3,4,5,6,7)
[3, 4, 5, 6, 7]

즉 a에는 1 b에는 2가 들어간다.
그리고 나머지 3,4,5,6,7은 num에 들어간다.
*/




function func(a,b,c,d){
	console.log(a,b,c,d);
}

var Array = [1,2,3,4]

func(Array)

/*
위처럼 쓰면 원하는 결과값은 a=1, b=2, c=3, d=4이다.
그러나 a=[1,2,3,4]
b = undefined
c = undefined
d = undefined로 나타난다.

*/




function func(a,b,c,d){
	console.log(a,b,c,d);
}

var Array = [1,2,3,4]
func(...Array)

/*
원했던 값 a=1, b=2, c=3, d=4 이 나온다.
배열로 합쳐져 있던 값을 전개연산자 ...을 통해 각 인자로 분산해서 대입할 수 있다.
*/