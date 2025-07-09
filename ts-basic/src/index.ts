class Coffee{
  public coffeeType:string;
  shot:number;
  constructor(public type:string, public shots:number){
    this.coffeeType = type;
    this.shot = shots;
  }

  describe(){
    console.log(`${this.shots}샷이 들어간 ${this.type}커피입니다.`)
  }
}

const temp = new Coffee("espresso", 10)
const temp2 = new Coffee("americano", 1)


//
class BankAccount{
  private balance:number;
  constructor(startingBalance:number){
    this.balance=startingBalance;
  }
  public getBalance():number{
    return this.balance;
  }
  public deposit(amount:number){
    if(amount>0) this.balance +=amount;
  }
}

const test1 = new BankAccount(10000);
test1.getBalance();
test1.deposit(10000);
//

class Vehicle{
  move(){
    console.log('이동 중...');
  }
}
class ElectricCar extends Vehicle{
  move(){
    console.log('조용히 이동 중...');
  }
}
class Car1 extends Vehicle{
  move(){
    console.log('소리내며 이동 중...');
  }
}

const tesla = new ElectricCar();
tesla.move();
//

//upcasting

class Animal{
  eat(){
    console.log("얌얌...")
  }
}
class Dog extends Animal{
  name:string;
  constructor(inputName:string){
    super();
    this.name=inputName
  }
}

let dog: Dog = new Dog('ddori')
let animal:Animal = dog;
animal.eat();


//downcasting
let animal2:Animal;
animal = new Dog('ddori')
let realDog: Dog = animal as Dog;
animal.eat();


//추상
abstract class Media{
  constructor(public title:string){

  }
  abstract play():void;
} 

class Song extends Media{
    play(){
	  console.log(`${this.title}재생 중`)
  }
}