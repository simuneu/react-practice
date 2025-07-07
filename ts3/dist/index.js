"use strict";
// boolean
function checkUserStatus(isLoggedIn) {
    if (isLoggedIn) {
        return "사용자가 로그인되어 있습니다";
    }
    else {
        return "사용자가 로그인되어 있지 않습니다.";
    }
}
const currentUserLoggedIn = true;
const message = checkUserStatus(currentUserLoggedIn);
console.log(message);
const guestUserLoggedIn = false;
console.log(checkUserStatus(guestUserLoggedIn));
console.log("--------------------------------------------------------------------------------------------------------");
// number
function calculateDiscountPrice(originalPrice, discountRate) {
    return originalPrice * (1 - discountRate);
}
const productPrice = 12500.50;
const discount = 0.15;
const finalPrice = calculateDiscountPrice(productPrice, discount);
console.log(`원가 ${productPrice}에서 ${discount * 100}% 할인된 가격 : ${finalPrice.toFixed(2)}원`);
const hexValue = 0xFF;
console.log(hexValue);
console.log("--------------------------------------------------------------------------------------------------------");
//string
function generateWelcomeMessage(userName, appName) {
    return `안녕하세요, ${userName}님! ${appName}에 오신 것을 환영합니다.`;
}
const user = "홍길동";
const app = "TypeScript시작";
const welcomeMessage = generateWelcomeMessage(user, app);
console.log(welcomeMessage);
const oldWayMessage = "안녕하세요, " + user + "님! " + app + "에 오신 것을 환영합니다.";
console.log(oldWayMessage);
console.log("--------------------------------------------------------------------------------------------------------");
//array
function calculateAverage(grades) {
    if (grades.length === 0) {
        return 0;
    }
    let sum = 0;
    for (const grade of grades) {
        sum += grade;
    }
    return sum / grades.length;
}
const studentGrades = [88, 92, 75, 95, 80];
const averageGrade = calculateAverage(studentGrades);
console.log(`학생 평균 점수: ${averageGrade.toFixed(2)}점`);
const fruits = ["사과", "바나나", "오렌지"];
fruits.push("포도");
console.log(fruits);
console.log("--------------------------------------------------------------------------------------------------------");
//tuple
const userInfo = ["이순신", 35, true];
console.log(`이름:${userInfo[0]}, 나이:${userInfo[1]}, 활성:${userInfo[2]}`);
userInfo.push();
console.log("--------------------------------------------------------------------------------------------------------");
//enum
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["EDITOR"] = "EDITOR";
    UserRole["USER"] = "USER";
})(UserRole || (UserRole = {}));
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["SUNDAY"] = 0] = "SUNDAY";
    DayOfWeek[DayOfWeek["MONDAY"] = 1] = "MONDAY";
    DayOfWeek[DayOfWeek["TUESDAY"] = 2] = "TUESDAY";
    DayOfWeek[DayOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    DayOfWeek[DayOfWeek["THURSDAY"] = 4] = "THURSDAY";
    DayOfWeek[DayOfWeek["FRIDAY"] = 5] = "FRIDAY";
    DayOfWeek[DayOfWeek["SATURDAY"] = 6] = "SATURDAY";
})(DayOfWeek || (DayOfWeek = {}));
const today = DayOfWeek.MONDAY;
console.log(`현재요일:${DayOfWeek} (${DayOfWeek.MONDAY})`);
console.log("--------------------------------------------------------------------------------------------------------");
//let
let counter = 0;
//const
const PI = 3.14159;
console.log(`원주율 PI: ${PI}`);
const colors = ["red", "green", "blue"];
console.log(`초기 색상 배열: ${colors}`);
colors.push("yellow");
console.log(`원소 추가 후: ${colors}`);
console.log("--------------------------------------------------------------------------------------------------------");
//readonly
class Product {
    constructor(id, name, price) {
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
let flexibleValue;
flexibleValue = 10;
console.log(flexibleValue);
flexibleValue = "string";
console.log(flexibleValue);
flexibleValue = { id: 1, type: "data" };
console.log(flexibleValue);
let num = flexibleValue;
console.log(num);
console.log("--------------------------------------------------------------------------------------------------------");
//unknown
function printId(id) {
    if (typeof id === 'string') {
        console.log(`ID는 문자열입니다. ${id.toUpperCase()}`);
    }
    else {
        console.log(`ID는 숫자입니다. ${id.toFixed(2)}`);
    }
}
printId("ggry112");
printId(39482304);
console.log("--------------------------------------------------------------------------------------------------------");
