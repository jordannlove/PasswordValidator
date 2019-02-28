function isValid()
{
  let pass1 = document.getElementById("password1").value;
  let pass2 = document.getElementById("password2").value;
  console.log(pass1);
  console.log(pass2);
  if(pass1 == pass2)
  {
    console.log("Valid");
  }
  else
  {
    console.log("Invalid");
    alert("Sorry, your passwords didn't match.");
  }
}
