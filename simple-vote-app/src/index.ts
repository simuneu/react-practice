//투표항목, 득표수
interface VoteOption {
  name:string, 
  votes:number;
}

function createVoteOption (name:string): VoteOption{
  return {
    name, 
    votes:0
  }
}
//모양 일치 해야함. name과votes

//투표 함수
function vote(option:VoteOption):void{
  option.votes +=1;
  console.log(`${option.name}에 투표 완료, 현재 득표수 :${option.votes}`)
}

//투표수 조회
//입력으로 VoteOption[]을 받아서 리턴은 없음
//안에 모든 투표의 투표수를 콘솔에 출력
function getVoteResults(options:VoteOption[]):void{
  options.forEach(option=>{
    console.log(`모든 투표수 ${option.name}에 투표, 현재 투표수 ${option.votes}`)
  })
}

//모든 투표의 최고 투표 항목을 찾아 반환하는 함수
//동점일 경우 첫 번째 항목만 반환
//진행 중인 투표가 없는경우 null반환
function getWinner (options:VoteOption[]){
  if(!options ||options.length ===0){
    return null;
  }

  let maxOption = options[0];
  for(let i =1; i<options.length; i++){
    if(options[i].votes >maxOption.votes){
      maxOption = options[i]
    }
  }
  return maxOption;
}

function main():void{
  //투표항목 생성
  const menuOptions :VoteOption[]=[
    createVoteOption('김찌'),
    createVoteOption('된찌'),
    createVoteOption('돈까'),
    createVoteOption('제육'),
  ];

  vote(menuOptions[0]);

  getVoteResults(menuOptions)

  const winner = getWinner(menuOptions);
  if(winner){
    console.log(`${winner.name}로 결정 ${winner.votes}표`)
  }else{
    console.log(`투표항목 없음`)
  }
}
main();