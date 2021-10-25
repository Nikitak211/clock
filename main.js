
let time = document.getElementById('time')

let date;
function clock() { 
  setInterval(function (){
  date = new Date()
  let hour = `${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}:${(date.getSeconds()<10?'0':'') + date.getSeconds()} `
    let text = `IT'S ${hour} - TIME TO EXERCISE MATE `
  time.innerText = text 
  }, 1000)
}
clock()
