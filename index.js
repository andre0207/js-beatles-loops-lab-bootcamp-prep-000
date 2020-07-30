let theBeatlesPlay = (musicians, instruments) => {
 let newArr = [];
  for (let i = 0; i < musicians.length; i++) {
    newArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArr
}

let johnLennonFacts = (array) => {
  let newArr = [];
  let i = 0
  
  while(i < array.length){
    newArr.push(`${array[i]}!!!`)
    i++
  }
  return newArr
}

let iLoveTheBeatles = (num) => {
  let newArr = [];
  
  let i = 0
  
  do { newArr.push('I love the Beatles!') 
  num++
    
  } while(i <= 8)
  
  return newArr
}  