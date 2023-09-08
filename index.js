let currentDAY= new Date ("september 08,2023");
let weekday= new Array(7);
  weekday[0]="Sunday";
  weekday[1]="Monday";
  weekday[2]="Tuesday";
  weekday[3]="Wednesday";
  weekday[4]="Thursday";
  weekday[5]="Friday";
  weekday[6]="Sarturday";
  let day = weekday[currentDAY.getDay()];
  console.log(day);
  document.querySelector('#date').innerHTML = `Today is ${day}`;

  
function dispalyTime(){
    var dateTime = new Date();
    var hrs = dateTime.getUTCHours();
    var min = dateTime.getUTCMinutes();
    var secs = dateTime.getUTCSeconds();
    var milisec = dateTime.getUTCMilliseconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML='PM';
    }else{
        session.innerHTML='AM';
    }
    if(hrs > 12){
        hrs=hrs - 12;
    }



 document.getElementById('hours').innerHTML= hrs ;
 document.getElementById('minutes').innerHTML=min;
 document.getElementById('seconds').innerHTML=secs;
 document.getElementById('milliseconds').innerHTML=milisec;


     
}
setInterval(dispalyTime,10);

 