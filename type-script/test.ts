//명시적 타입 언어

let username: string = "lee"
let message: string =`hello ${username}`

//타입 추론
// let user = "park";
// user = 123 //이미 타입이 결정돼서 에러남

console.log(username + message)

//number
//Nan, Infinity
let age: number =27;
let pi: number = 3.14;

//boolean
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;

//null, undefined
//strictNullChecks tsconfig에 설정 필요
let nothing: null = null;
let notAssigned: undefined = undefined;

//any
let data :any =123;
data="문자열도 가능"
data=true;

//unknown
let value: unknown="string"
if(typeof value ==="string"){
  console.log(value.toUpperCase());
}


//void (함수가 값을 반환하지 않을 때 사용)
function logMessage(message:string):void{
  console.log(message)
}

//never(절대 반환하지 않는 함수에 사용)
function throwError():never{
  throw new Error("예외 발생")
}

//object
let obj: object={name:"Alice"};
let obj2 :{name:string}={name:"Alice"}

//배열
let fruits:string[] =["apple", "grape"]; //문자만 들어갈 수 있음 