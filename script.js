console.log("hello world");

const heading=document.getElementById('heading');

console.log(heading)

var msg='Goodbye my lover';
heading.innerText=msg;

heading.innerHTML=` <br>${msg} <br>`;

console.log(heading.style.color='violet')
console.log(heading.style.backgroundColor='red')


const a=document.getElementById('red');
const b=document.getElementById('blue');
const c=document.getElementById('yellow');

// a.addEventListener('click',()=>{
//   a.style.backgroundColor='black';
//   console.log('red')
// })

// b.addEventListener('mouseover',()=>{
//   b.style.backgroundColor='green';
//      b.addEventListener('mouseover',()=>{
//          b.style.backgroundColor='blue';
//      })
//   console.log('blue')
// })

// c.addEventListener('click',() => {
//         console.log('yellow');
//     })


const squares=document.querySelectorAll('.colorSquare');
console.log(squares)


const timeClicked={'red': 0, 'blue':0, 'yellow':0  }
squares.forEach(squares=>{
  squares.onclick=()=>{

    timeClicked[squares.value]+=1;
    squares.innerText=timeClicked[squares.value]
    
  }
  
})

function clearScores(){
  timesClicked.red=0;
  timesClicked.blue=0;
  timesClicked.yellow=0;
  squares.forEach(squares=>{
    squares.innerText=0;
  })
}

const clrbtn=document.getElementById('button');
clrbtn.onclick=()=>clearScores()

