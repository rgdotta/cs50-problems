let x = 10;
let y = "";
let arr = new Array

const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}

if(typeof x === 'number'){
  for(i=0; i<x + 1; i++){
    times(x - i)(() => y = y + " ")
    times(i)(() => y = y + "*")
    y = y + " "
    times(i)(() => y = y + "*")
    y = y + "\n"
  }
} else { 
   y = "Var x is not a number";
}

console.log(y)
