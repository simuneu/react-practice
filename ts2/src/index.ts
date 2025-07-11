function print(value:any):any{
  console.log(value)
  return value;
}

function identity<T>(value:T):T{
  return value;
}


//Required

interface UserProfile{
  username:string;
  email:string, 
  phone?:string, 
  address?:string
}

type CompleteUserProfile = Required<UserProfile>
const newUser:CompleteUserProfile={
  username:"lee", 
  email:"kk",
  phone:"000-000-0000", 
  address:"dd"
}


//Partial

interface Product{
  id:string, 
  name:string, 
  price:number, 
  description:string
}

function updateProduct(product:Product,fieldToUpdate:Partial<Product>):Product{
  return {...product, ...fieldToUpdate}
}
const originalProduct: Product = {
  id: "1",
  name: "노트북",
  price: 1000000,
  description: "고성능 노트북"
};

// 가격만 업데이트
const updatedProduct1 = updateProduct(originalProduct, { 
  price: 1200000 
});

// 이름과 설명 업데이트
const updatedProduct2 = updateProduct(originalProduct, {
  name: "게이밍 노트북",
  description: "최고 성능 게이밍 노트북"
});

// 모든 속성 업데이트도 가능
const updatedProduct3 = updateProduct(originalProduct, {
  id: "2",
  name: "새 노트북",
  price: 1500000,
  description: "완전히 새로운 제품"
});

//readonly
interface Point{
  x:number, 
  y:number
}

const mutablePoint:Point={ x:10, y:20}
mutablePoint.x=15;
console.log(mutablePoint)

type ImmutablePoint =Readonly<Point>

const ImmutablePoint:ImmutablePoint={ x:30, y:40}
console.log(mutablePoint)


//pick
interface Customer{
  id:string, 
  firstName:string, 
  lastName:string, 
  email:string, 
  phoneNumber?:string
}
type CustomerName = Pick<Customer, "firstName"|"lastName">;
const customerInfo: CustomerName={
  firstName:"lee", 
  lastName:"park"
}

console.log(customerInfo)


//Omit
interface Employee{
  id:string;
  name:string;
  department:string; 
  salary:number;
  hireDate:Date;
}

type PublicEmployeeInfo = Omit<Employee, "salary"|"hireDate">
const PublicInfo:PublicEmployeeInfo ={
  id:"lee11",
  name:"lee",
  department:"a"
}
console.log(PublicInfo)