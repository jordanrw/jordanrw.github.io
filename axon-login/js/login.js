// Login from Button
$(document).ready(function(){
  $('#login-button').click(function() {  
    login();
  });
});

// Login from Enter
function enterScript(e) {
  if (e.keyCode == 13) {
    login();
  }
}

function login() {
  var inputvalue = $("#username").val().toLowerCase();
  if (inputvalue == "executive") {
    window.location.replace("./executive-dashboard.html");
  } else if (inputvalue == "nurse") {
    window.location.replace("./house-view.html");
  } else {
    alert("Unknown username");
  }
}
