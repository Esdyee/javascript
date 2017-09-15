var array = ['사과', '바나나', '망고']


var product = {
	name : 'mango'
	type : 'sweet'
	component : ['sugar','mango','Na']
	made : 'Philippines'
}

var product = {
	'name' : 'mango'
	'type' : 'sweet'
	'component' : ['sugar','mango','Na']
	'made' : 'Philippines'
}


product['name']


var person = {
	name: '제일',
	eat: function(){
		alert(this.name + '와구와구')
	}
}

for(var key in product){
	output += '-' + key + ':' + product[key] + '\n';
}
alert(output);

var student = {
	영어 : 77, 과학: 90,
		이름 : '제일',
	국어 : 80, 수학 : 90,
output : "이미 있음"
}

var output = '';
output += '이름:' + student.이름 + '\n';
output += '국어:' + student.국어 + '\n';
output += '수학:' + student.수학 + '\n';
output += '영어:' + student.영어 + '\n';
output += '과학:' + student.과학 + '\n';
output += '총점:' + (student.국어 + student.수학 + student.영어 + student.과학);
console.log(output);

var output = '';
with(student){
	output += '이름 :' + 이름 + '\n'
	output += '국어 :' + 국어 + '\n'
	output += '수학 :' + 수학 + '\n'
	output += '영어 :' + 영어 + '\n'
	output += '과학 :' + 과학 + '\n'
	output += '총점 :' + (국어 + 수학 + 영어 + 과학) + '\n'
}
console.log(output);



var student = {};

student.name = '제일';
student.hobby = '프로그래밍';
student.job = '개발자';

student.toString() = function() {
	var output = '';
	for (var key in this){
		//toString() 메서드 자체는 출력하지 않기 위함
		if (key != 'toString'){
			output += key + '\t' + this[key] + '\n';
		}
	}
}


var student1 = {name:'제일', score:60}
var student2 = {name:'김성호', score:80}
var student3 = {name:'박최고', score:70}

var students = [];

students.push({name:'제일', score:60})
students.push({name:'김성호', score:80})
students.push({name:'박최고', score:70})

function makeStudent(name, math, english){
	var willReturn = {
		Name : name,
		Math : math,
		English : english

		getSum : function(){
			return this.Math + this.English
		}
	}

}


function test(options){
	//옵션객체 초기화(즉, 기본값 설정)
	options.valueA = options.valueA || 10;
	options.valueB = options.valueB || 20;
	options.valueC = options.valueC || 30;

	alert(options.valueA + ',' + options.valueB + ',' + options.valueC);
}

test({
	valueA:400,
	valueC:600,
})


var origin = 10
var copy = origin

origin = 20

origin ==> 20
copy ==> 10


var originArray = [1,2,3]
var copyArray = originArray

originArray[0] = 10

originArray = [10,2,3]
copyArray = [10,2,3]




//배열 선언
var originArray = [1,2,3,4];

//배열 복제
var newArray = [];
for (var i = 0; i < originArray.length; i++){
	newArray[i] = originalArray[i];
}

//배열 선언
const originArray = [1,2,3,4,5];

//배열 복제
const newArray = [...originArray];


const arrayA = [1,2,3,4,5];
const arrayB = [11.22.33.44.55];

constNew = [...arrayA,... arrayB]
