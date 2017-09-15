//들어가기전에
//인스턴스(Instance) : 생성자 함수를 기반으로 생성한 객체를 인스턴스라고 합니다.
//프로토타입 : 생성자 함수로 생성한 객체들이 공동으로 갖는 공간입니다. 일반적으로 메서드를 이러한 공간에 선언합니다.


//속성 생성
function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var person = new Person("je", 23, "Man");


/*
결과 값
Person {name: "je", age: 23, gender: "Man"}
*/





//메서드 생성

function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;

	//메서드
	this.shortGender = function(gender){
		if(gender=="Male"){
			genderType = "M";
		} else {
			genderType = "F"
		}

		return genderType;
	}

	this.ageCategory = function(){
		ageCate = Math.floor(age/10)*10
		return ageCate;
	}

	this.toString = function (){
		return this.name + '\t' + this.shortGender() + '\t' + this.ageCategory()
	}
}

//people 배열 선언
var people = [];

//person 생성자로 people에 push
people.push(new Person("je", 23, "Male"));

var output = 'name\tgenderType\tageCate\n'

for(var i in people){
	//console.log(people[i].toString());
	output += people[i].toString() + '\n'
}

console.log(output);

/*
person은 객체 또는 인스턴스라고 함
people은 person의 배열
 
*/