$(document).ready(function() {

  $(window).on('load', function() {
    $("#splash_page").hide();
  });
    
    var setCountDown; // will store result of our setInterval function
    var storeValues; // will store initial minutes so we can reset for every time option
    var minutes;
    var seconds;
  
    // set up sound file 
    var beep = document.createElement("audio");
        beep.src="https://kahimyang.com/resources/sound/click.mp3";
        beep.volume=0.50;
        beep.autoPlay=false;
        beep.preLoad=true;      
  
      function countDown() {
        if (seconds == 00) {
          if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          }
        }
        else if (0 < seconds < 60) {
          seconds -= 1;
        } 
        
        if (seconds < 10) {
          $("#timer").html("--"+minutes+":"+"0"+seconds+"--");
        }
        else {
          $("#timer").html("--"+minutes+":"+seconds+"--");
        }
        
        if (minutes == 0 && seconds == 00) {
          $("#timer").html("Complete!");
          //$("#timer").css("cssText", "font-size:30px !important");
          beep.play();
        }
      }
     
     $("#1").on("click", function() {
       minutes = 01;
       seconds = "00";
       storeValues = minutes;
       $("#timer").html("--"+minutes+":"+seconds+"--");
     });
  
     $("#5").on("click", function() {
       storeValues = 5;
       clearInterval(setCountDown);
       minutes = 05;
       seconds = "00";
       $("#timer").html("--"+minutes+":"+seconds+"--");
     });
   
     $("#10").on("click", function() {
       storeValues = 10;
       clearInterval(setCountDown);
       minutes = 10;
       seconds = "00";
       $("#timer").html("--"+minutes+":"+seconds+"--");
     });
  
     $("#15").on("click", function() {
       storeValues = 15;
       clearInterval(setCountDown);
       minutes = 15;
       seconds = "00";
       $("#timer").html("--"+minutes+":"+seconds+"--");
     });
  
     $("#20").on("click", function() {
       storeValues = 20;
       clearInterval(setCountDown);
       minutes = 20;
       seconds = "00";
       $("#timer").html("--"+minutes+":"+seconds+"--");
     });
  
     $("#25").on("click", function() {
       storeValues = 25;
       clearInterval(setCountDown);
       minutes = 25;
       seconds = "00";
       $("#timer").html("--"+minutes+":"+seconds+"--");
     });
  
     $("#30").on("click", function() {
       storeValues = 30;
       clearInterval(setCountDown);
       minutes = 30;
       seconds = "00";
       $("#timer").html("--"+minutes+":"+seconds+"--");
     });
     
     $("#35").on("click", function() {
       storeValues = 35;
       clearInterval(setCountDown);
       minutes = 35;
       seconds = "00";
       $("#timer").html("--"+minutes+":"+seconds+"--");
     });
  
     $("#40").on("click", function() {
       storeValues = 40;
       clearInterval(setCountDown);
       minutes = 40;
       seconds = "00";
       $("#timer").html("--"+minutes+":"+seconds+"--");
     });
    
     $("#45").on("click", function() {
       storeValues = 45;
       clearInterval(setCountDown);
       minutes = 45;
       seconds = "00";
       $("#timer").html("--"+minutes+":"+seconds+"--");
     });
  
     $("#start").on("click", function() {
       if ($("h2").text().length !== 0) {
         setCountDown = setInterval(countDown, 1000);
         $("#start").prop("disabled", true);
         $("#chooseLength").prop("disabled", true);
       }
     });

     // RESET TIME 
     $("#reset").on("click", function() {
       if ($("h2").text().length !== 0) {    
         clearInterval(setCountDown);
         $("#timer").html("--"+storeValues+":"+"00"+"--");
         minutes = storeValues;
         seconds = 00;
         $("#start").prop("disabled", false);
         $("#chooseLength").prop("disabled", false);
       }
       
     });

});

