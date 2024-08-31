
function startTime() {
    let today = new Date();
  

    let hr = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()
      
    ap = (hr < 12) ? "<span> AM </span>" : "<span> PM </span>"
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr
    
    hr = checkTime(hr)
    min = checkTime(min)
    sec = checkTime(sec)
  
    document.getElementById('clock').innerHTML =  hr + ":" + min + ":" + sec + "" + ap
    
    const months = ['January','February','March','April','May','June','July','August','September', 'October','November','December']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
    let curWeekDay = days[today.getDay()]
     
   let curDay = today.getDate()
  let curMonth = months[today.getMonth()]
    let curFullYear = today.getFullYear()
    
   let date = curWeekDay + ',' + curDay + "" + curMonth +" " + curFullYear

    
document.getElementById('date').innerHTML = date
      
let time = setTimeout(function(){ startTime() }, 500);
  


}



 


function checkTime(i) {
    if (i < 10) {
        i =  '0' + i
    }
    
    return i
 }


  startTime()

  