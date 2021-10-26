//1
function countToTwenty(){
  for(let i = 1; i <= 20; i++){
      console.log(i)
  }
  
}

//2
function countFromTwenty(){
  for(let i = 20; i > 0; i--){
      console.log(i)
  }
}

//3
function countToN(n){
    for(let i = 1; i <= n; i++){
        console.log(i)
    }
  
}


//4
function countFromN(n){
  for(let i = n; i > 0; i--){
      console.log(i)
  }
}

//5
function countEveryOdd(int){
  for(let i = 1; i <= int; i++){
      if(i % 2 !== 0){
          console.log(i)
      }
  }
}

countToTwenty()
countFromTwenty()
countToN(13)
countFromN(9)
countEveryOdd(22)