function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if(user == "Ritesh@62" && pass=="62095") {
    window.location.href = "home.html";
  } else {
    alert("Wrong user or password. Please try again.");
  }
}

function Guest() {
  window.location.href = "home.html";
}
