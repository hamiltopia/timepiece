$(document).ready(function(){


  // Create two variable with the names of the months and days in an array
  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  // Create a newDate() object
  var newDate = new Date();
  // Extract the current date from Date object
  newDate.setDate(newDate.getDate());

  // Output the day, date, month and year
  $('.date-day-name').html(dayNames[newDate.getDay()]);

  // Output the day, date, month and year
  $('.date-day-month').html(newDate.getDate() + ' ' + monthNames[newDate.getMonth()]);

  // Output the day, date, month and year
  $('.date-year').html(newDate.getFullYear());


// Clock ---------- \\
// function updateClock ( )
//  	{
//
//  }
//
//  setInterval('updateClock()', 1000);


 setInterval(function() {
   var currentTime = new Date ( );
   var currentGreet = currentTime.getHours ( );
   var currentHours = currentTime.getHours ( );
   var currentMinutes = currentTime.getMinutes ( );
   var currentSeconds = currentTime.getSeconds ( );

   // Pad the minutes and seconds with leading zeros, if required
   currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
   currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

   // Choose either "AM" or "PM" as appropriate
   var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

   // Convert the hours component to 12-hour format if needed
   currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

   // Convert an hours component of "0" to "12"
   currentHours = ( currentHours == 0 ) ? 12 : currentHours;

   // Choose either "AM" or "PM" as appropriate
   //var greeting = ( currentGreet < 12 ) ? "Good Morning" : "Good Afternoon";

   if (currentGreet > 0 && currentGreet < 10) {
     $(".time-greet").html("Good<br>Morning");
     $(".clock").removeClass("night").addClass("morning");

   } else if (currentGreet > 10 && currentGreet < 12) {
     $(".time-greet").html("Hey<br>Sunshine");
     $(".clock").removeClass("morning").addClass("midmorning");

   } else if (currentGreet > 12 && currentGreet < 13) {
     $(".time-greet").html("High<br>Noon");
     $(".clock").removeClass("midmorning").addClass("noon");

   } else if (currentGreet > 13 && currentGreet < 15) {
     $(".time-greet").html("Good<br>Afternoon");
     $(".clock").removeClass("noon").addClass("afternoon");

   } else if (currentGreet > 15 && currentGreet < 18) {
     $(".time-greet").html("Good<br>Evening");
     $(".clock").removeClass("afternoon").addClass("evening");

   } else if (currentGreet > 18 && currentGreet < 24) {
     $(".time-greet").html("Good<br>Night");
     $(".clock").removeClass("evening").addClass("night");
   }

   $(".clock-main").html(currentHours + ":" + currentMinutes);
   $(".time-min").html(currentMinutes);
   $(".time-sec span").html(currentSeconds);
   $(".time-ampm").html(timeOfDay);
  }, 1000);



//END
});
