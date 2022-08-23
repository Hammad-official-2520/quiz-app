
var sign_in_btn = document.querySelector("#sign-in-btn");
var sign_up_btn = document.querySelector("#sign-up-btn");
var container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function signUp() {
  var email = document.getElementById("email").value;
  localStorage.setItem("email", email);
  var password = document.getElementById("password").value;
  localStorage.setItem("password", password);
  var username = document.getElementById("username").value;
  localStorage.setItem("username", username);

  if (username === false) {
      alert("Please Fill The FirstName Input")
      window.location.href = "index.html";
      return false;
  }
  return true;
}

  


function login() {
  var pass = document.getElementById("pass").value;
  var password = localStorage.getItem("password");
  var user = document.getElementById("user").value;
  var username = localStorage.getItem("username");
  if (pass == password && user == username) {
    window.location.href = "quiz.html"
  } else {
    alert("Please write correct username or password");
  }
}




function evalGroup()
{
var group = document.radioForm.answer;
for (var i=0; i<group.length; i++) {
if (group[i].checked)
break;
}
if (i==group.length)
return alert("No radio button is checked");
}
