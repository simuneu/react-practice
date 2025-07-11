//사용자 인터페이스 정의

enum Role{
  Admin='admin',
  Regular='regular',
}

interface User{
  id:string,
  name:string, 
  role: Role
}

interface Book{
  isbn:string,
  title:string, 
  author:string,
  publishedYear:number, 
  isAvailable:boolean
}

interface LoanRecord{
  loanId:number, 
  bookIsbn:string, 
  userId:string, 
  loanDate:Date, 
  dueDate:Date,
  returnDate?:Date
}

///data
let libraryBooks :Book[]=[];
let libraryUsers :User[]=[];
let libraryRecords :LoanRecord[]=[];

function isAdmin(user:User):boolean{
  return user.role === Role.Admin
}

function isRegular(user:User):boolean{
  if(user.role === Role.Regular){
    return true
  }
  return false
}

//도서 등록(관리자만 등록 가능)
//등록함수 호출되면 권한이 있는지 확인 > 책 정보가 이미 있는지 확인하고 없는 경우만 추가
function addBook(book:Book, user:User):void{
  if(!isAdmin(user)){
    console.log('권한없음')
  }
  const isRegister = libraryBooks.some(b =>b.title === book.title)
  if(isRegister){
    console.log('이미 등록됨')
  }
  libraryBooks.push(book);
    console.log('성공적으로 등록됨')
}


function removeBook(user:User, isbn:Pick<Book, 'isbn'>):void{
 if (!isAdmin(user)) {
    console.log('권한없음');
    return;
  }

  const index = libraryBooks.findIndex(b => b.isbn === isbn.isbn);
  if (index === -1) {
    console.log('해당 도서를 찾을 수 없습니다.');
    return;
  }

  if (!libraryBooks[index].isAvailable) {
    console.log('대여 중이라 책을 삭제할 수 없습니다.');
    return;
  }

  const removedBook = libraryBooks.splice(index, 1)[0];
  console.log(`${removedBook.title}이 삭제되었습니다.`);
}


function borrowBook(user:User, book:Book):number{
  if(!isRegular(user)){
    console.log('권한없음')
  }

  const index = libraryBooks.findIndex(b => b.isbn === book.isbn);

  if(index === -1){
    console.log('존재하지 않는 도서입니다.');
    return -1
  }
  
  if(!libraryBooks[index].isAvailable){
    console.log(`이미 대출 중입니다.`)
    return -1;
  }
  return index;

}

function registerUser(
  user:User, 
  {
    id,
    name, 
    role,
  }:User
){

  if(!isAdmin(user)){
    console.log(`권한없음`)
    return 
  }
  if(libraryUsers.some(b=>b.id===user.id)){
    console.log(`이미 있음`)
    return 
  }
  const newUser:User={
    id:user.id, 
    name:user.name,
    role:user.role
  }
  libraryUsers.push(newUser)
}

// function register(user:User):void{
//   const isDuplicate = libraryUsers.some(u=>u.id === user.id)
//   if(isDuplicate){
//     console.log(`이미 등록되었습니다.`)
//     return 
//   }
//   libraryUsers.push(user)
//     console.log(`${user.name}님이 등록되었습니다.`)

// }