document.getElementById("login-btn").addEventListener("click", function () {
  // value for email
  const userMail = document.getElementById("user-email");
  const userEmail = userMail.value;
  // console.log(userEmail);

  // Password Field
  const userPass = document.getElementById("user-password");
  const userPassword = userPass.value;
  // console.log(userPassword)

  if (userEmail == "bank@gmail.com" && userPassword == "password") {
    window.location.href = "bank.html";
  } else {
    alert("UserId or Password is not correct");
  }
});
