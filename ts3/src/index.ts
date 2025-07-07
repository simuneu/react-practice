
// boolean
function checkUserStatus(isLoggedIn : boolean): string {
  if (isLoggedIn) {
    return "사용자가 로그인되어 있습니다";
  } else {
    return "사용자가 로그인되어 있지 않습니다.";
  }
}

const currentUserLoggedIn: boolean = true;
const message = checkUserStatus(currentUserLoggedIn);
console.log(message);
const guestUserLoggedIn: boolean = false;
console.log(checkUserStatus(guestUserLoggedIn));
console.log("--------------------------------------------------------------------------------------------------------");



// number
function calculateDiscountPrice(originalPrice:number, discountRate:number):number{
  return originalPrice *(1-discountRate);
}
const productPrice:number = 12500.50;
const discount:number = 0.15;
const finalPrice = calculateDiscountPrice(productPrice, discount)
console.log(`원가 ${productPrice}에서 ${discount*100}% 할인된 가격 : ${finalPrice.toFixed(2)}원`)

const hexValue:number = 0xFF;
console.log(hexValue)
console.log("--------------------------------------------------------------------------------------------------------");



//string
function generateWelcomeMessage(userName: string, appName: string): string {
  return `안녕하세요, ${userName}님! ${appName}에 오신 것을 환영합니다.`;
}
const user: string = "홍길동";
const app: string = "TypeScript시작";
const welcomeMessage = generateWelcomeMessage(user, app);
console.log(welcomeMessage);
const oldWayMessage: string = "안녕하세요, " + user + "님! " + app + "에 오신 것을 환영합니다.";
console.log(oldWayMessage);
console.log("--------------------------------------------------------------------------------------------------------");



//array
function calculateAverage(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }
  let sum: number = 0;
  for (const grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}

const studentGrades: number[] = [88, 92, 75, 95, 80];
const averageGrade = calculateAverage(studentGrades);
console.log(`학생 평균 점수: ${averageGrade.toFixed(2)}점`);
const fruits: string[] = ["사과", "바나나", "오렌지"];
fruits.push("포도");
console.log(fruits);
console.log("--------------------------------------------------------------------------------------------------------");



//tuple
const userInfo :[string, number, boolean] =  ["이순신", 35, true]
console.log(`이름:${userInfo[0]}, 나이:${userInfo[1]}, 활성:${userInfo[2]}`)
userInfo.push();
console.log("--------------------------------------------------------------------------------------------------------");



//enum
enum UserRole{
  ADMIN="ADMIN", 
  EDITOR="EDITOR",
  USER="USER" 
}

enum DayOfWeek{
    SUNDAY, 
    MONDAY, 
    TUESDAY, 
    WEDNESDAY, 
    THURSDAY, 
    FRIDAY, 
    SATURDAY, 
}
const today:DayOfWeek = DayOfWeek.MONDAY;
console.log(`현재요일:${DayOfWeek} (${DayOfWeek.MONDAY})`)
console.log("--------------------------------------------------------------------------------------------------------");

//let
let counter:number=0;

//const
const PI: number = 3.14159;
console.log(`원주율 PI: ${PI}`);
const colors: string[] = ["red", "green", "blue"];
console.log(`초기 색상 배열: ${colors}`);
colors.push("yellow");
console.log(`원소 추가 후: ${colors}`);
console.log("--------------------------------------------------------------------------------------------------------");

//readonly
class Product {
  readonly productId: string;
  productName: string;
  price: number;

  constructor(id: string, name: string, price: number) {
    this.productId = id;
    this.productName = name;
    this.price = price;
  }
}

const laptop = new Product("LAPTOP001", "최신형 노트북", 1500000);

console.log(`제품 ID: ${laptop.productId}`);
console.log(`제품명: ${laptop.productName}`);

laptop.productName = "고급형 노트북";
console.log(`변경 제품명: ${laptop.productName}`);
console.log("--------------------------------------------------------------------------------------------------------");



//any
let flexibleValue:any;

flexibleValue=10;
console.log(flexibleValue)

flexibleValue="string"
console.log(flexibleValue)

flexibleValue={id:1, type:"data"}
console.log(flexibleValue)

let num:number=flexibleValue;
console.log(num)
console.log("--------------------------------------------------------------------------------------------------------");

//unknown
function printId(id:string|number){
  if(typeof id === 'string'){
    console.log(`ID는 문자열입니다. ${id.toUpperCase()}`)
  }else{
    console.log(`ID는 숫자입니다. ${id.toFixed(2)}`)
  }
}
printId("ggry112");
printId(39482304);
console.log("--------------------------------------------------------------------------------------------------------");


//타입가드 = typeof
//원시타입(string, number, boolean, symbol, bright, undefined)체크할 때 사용.
//instanceof : 특정 클래스의 인스턴스인지 확인할 때 사용
class Car {
  drive(){
    console.log("drive~~~~~~~~~~~~~~")
  }
}
class Bicycle{
  pedal(){
    console.log("ddareung~~~~")
  }
}
function moveVehicle(vehicle:Car|Bicycle){
  if(vehicle instanceof Car){
    vehicle.drive();
  }else {
    vehicle.pedal();
  }
}

//in연산자
//객체 안에 특정 속성(property)이 존재하는지 확인할 때 사용
interface Dog{
  bark():void
  breed:string
}

interface Cat{
  meow():void;
  purr:boolean;
}
function makeSound(animal:Dog|Cat){
  if('bark' in animal){
    animal.bark();
    console.log(`${animal.breed}`)
  }else{
    animal.meow();
    console.log(`golgol :${animal.purr}`)
  }
}
//사용자 정의 타입 가드
//개발자가 직업 타입을 좁히는 함수 정의
//반환 타입에 parameter idd Type형태의 타입 프레디케이트를 사용
interface Fish{
  swim():void
}
interface Bird{
  fly():void
}
function isFish(animal:Fish|Bird):animal is Fish{
  return (animal as Fish).swim !== undefined
}

function move(animal:Fish|Bird){
  if(isFish(animal)){
    animal.swim();
  }else{
    animal.fly();
  }
}

// 인터페이스는 ts에서 객체의 모양을 정의
interface ProductInfo{
  id:number;
  name:string;
  price:number;
  description?:string;
  readonly createAt:Date;
}

const newLaptop:ProductInfo={
  id:101, 
  name:"ultra",
  price:1500000, 
  description:"설명",
  createAt:new Date()
}

interface SearchFunction{
  (source:string, subString:string):boolean
}
let mySearch:SearchFunction;

mySearch= function(src:string, sub:string):boolean{
  const result= src.indexOf(sub)
  return result >-1
}
console.log(mySearch("hi ts", "type"))

let anotherSearch:SearchFunction = function(text:string, keyword:string):boolean{
  return text.includes(keyword)
}
console.log(anotherSearch("js is interesting", "js"))

//인덱싱 기능 인터페이스
//배열이나 객체처럼 인덱스를 통해 접근할 수 있는 타입의 모양을 정의할 때 사용
//인덱스 시그니처를 사용하여 정의하며 indexType은 string or number만 가능
interface StringArray{
  [index:number]:string
}
let myArray:StringArray
myArray=["hello", "world"]
console.log(myArray[0])

interface Dictionary{
  [key:string]:string
}
let myDictionary:Dictionary={
  name:"lee",
  city:"seoul"
}
console.log(myDictionary["name"])
myDictionary["country"]="korea"

//인터페이스 상속
interface Shape{
  color:string,
}

interface Circle extends Shape{
  radius:number
}

interface ColoredCircleWithBorder extends Circle{
  borderWidth:number;
  borderColor:string;
}

const myComplexCircle: ColoredCircleWithBorder={
  color:"red",
  radius:5,
  borderWidth:2,
  borderColor:"black"
}



//타입 별칭
type Age= number;
type UserName= string;
const userAge:Age=30;
const greetingName:UserName="TS"

type ResultStatus = "success"|"failure"
type IdOrName = number|string

function showStatus(status:ResultStatus):void{
  console.log(`처리 상태ㅣ${status}`)
}
showStatus("success")



// 3. 객체 타입에 별칭 부여
type Coords = {
  x: number;
  y: number;
};
const point: Coords = { x: 10, y: 20 };
console.log(`좌표: (${point.x}, ${point.y})`);



// 4. 함수 시그니처에 별칭 부여
type GreetFunction = (name: string) => string;
const sayHello: GreetFunction = (name) => `Hello, ${name}!`;
console.log(sayHello("홍길동"));



// 5. 타입 조합
type PersonInfo = {
  name: string;
  age: number;
};

type EmployeeInfo = PersonInfo & {
  employeeId: string;
  department: string;
};

const employee: EmployeeInfo = {
  name: "김영희",
  age: 28,
  employeeId: "EMP-001",
  department: "개발"
};
console.log(employee);


//6
interface Person {
  name: string;
  age: number;
}

interface Person { // 선언적 확장
  gender: string;
}

const test: Person = {
  name: 'test',
  age: 27,
  gender: 'female'
}

console.log("--------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------");

// olimpic_newgame=[
//   {
//     name:"swim",
//     type:"male"
//   },
//   true,
// ]
