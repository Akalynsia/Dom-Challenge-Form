// Challenge 1
document.getElementById("special-button").addEventListener("click", function(e){
    e.preventDefault()
    return alert("Hooleeey!")
  })
  
  // Challenge 2
  const passwordForm =
  document.getElementById("password-form")
  
  const password = document.getElementById("password-input")
  
  const submit = passwordForm.lastElementChild
  
  submit.addEventListener("click", function(e){
    e.preventDefault()
    if((password.value).length < 1) {
      return alert("Password cant be empty")
      password.setAttribute("required", "")
    } else {
      return alert(password.value)
    }
  })
  
  
  // Challenge 3
  
  const signUp = document.getElementById("signup-form")
  const email = document.getElementById("email-input")
  const userName = document.getElementById("username-input")
  const button2 = signUp.lastElementChild
  
  button2.addEventListener("click", function(){
    
     if((userName.value || email.value).length  < 1){
     return userName.setAttribute('required', "")
    } else if((userName.value && email.value).length  < 1){
      return email.setAttribute('required', "")
    }
    else {
      return alert(userName.value + " " + email.value)
    }
   
  })