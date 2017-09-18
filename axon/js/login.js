$(document).ready(function(){
        $('#login-button').click(function(e) {  
          var inputvalue = $("#username").val().toLowerCase();
          if (inputvalue == "executive") {
            window.location.replace("./executive-dashboard.html");
          } else if (inputvalue == "nurse") {
            window.location.replace("./nurse-dashboard.html");
          } else {
            alert("Unknown username");
          }
        });
      });