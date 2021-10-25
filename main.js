
let time = document.getElementById('time')

let date;
function clock() {
  
  window.setTimeout(function (){
  for (let i = 0; i < 1; i++) {
    clock()
   date = new Date()
   
  } 
  let hour = `${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}:${(date.getSeconds()<10?'0':'') + date.getSeconds()}`

  time.innerText = hour 
  console.log(hour)
  }, 1)
}
clock()
