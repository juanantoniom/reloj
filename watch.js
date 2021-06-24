function theTimeis(){
  var date = new Date();

  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var meridiem = "am";


  if(hour == 0){
        hour = 12;
    }

  if(hour > 12){
        hour = hour - 12;
        meridiem = "pm";
  }

  hour = (hour < 10) ?  "0" + hour : hour;
  minutes = (minutes < 10 ) ? "0" + minutes : minutes;
  seconds = (seconds < 10 ) ? "0" + seconds : seconds;

  document.getElementById("hour").innerHTML= hour;
  document.getElementById("minutes").innerHTML= minutes;
  document.getElementById("seconds").innerHTML = seconds;

  setTimeout(theTimeis, 1000);

}


window.addEventListener('load',theTimeis,false);
