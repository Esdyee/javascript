//속성은 모든 객체가 다른값 가짐
//메서드는 모두 같은 값을 가짐
//객체생성할 때마다 동일한 함수 생성함. ==> 비효율적
//프로토타입(Prototype)

function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}



//prototype은 사용자가 만드는 것이 아니다.
//이미 prototype 객체 존재

function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

Person.prototype.ageCategory = function (age){
	console.log(age)
	ageCate = Math.floor(age/10)*10
		return ageCate;
}

//people 배열 선언
var people = [];

//Person 객체 생성후 people에 push
people.push(new Person('je', 24, 'Male'));

//prototype에 한번만 만들어 놓으면
//객체 생성때마다 ageCategory함수 만들 필요 없이
//for문 으로 prototype 한번 호출해서 모든 배열값에게 ageCategory return 값을 부여할 수 있음.

for(var i in people){
	console.log(people[i].name, people[i].ageCategory(people[i].age));
}