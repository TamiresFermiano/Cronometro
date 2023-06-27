let number = 0
let cron
let h1 = document.getElementById('time')

function start() {
  console.log(cron)
  if (!cron){
    cron = setInterval(function () {
      number++
      h1.innerHTML = number
    }, 1000)
  }
 
}

function stop() {
  clearInterval(cron)
  cron = undefined
}
function reset(){
  stop()
  number = 0
  h1.innerHTML = number

}