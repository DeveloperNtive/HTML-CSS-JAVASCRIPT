let nameField = document.getElementById('name')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let password = document.getElementById('password')
let requirePassword = document.getElementById('requirePassword')
let vpassword = document.getElementById('vpassword')
let errorNoEqualsPasswords = document.getElementById('errorNoEqualsPasswords')
let form = document.getElementById('myform')

password.addEventListener('focus', () => {
  errorNoEqualsPasswords.innerHTML = ''
})
vpassword.addEventListener('focus', () => {
  errorNoEqualsPasswords.innerHTML = ''
})

form.addEventListener('submit', event => {
  event.preventDefault()
  if (password.value !== vpassword.value) {
    errorNoEqualsPasswords.innerHTML = 'Las contraseñas deben ser iguales!'
    console.log('Las contraseñas no son validas!')
    return
  }
  const user = {
    name: nameField.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value
  }
  localStorage.setItem(email.value, JSON.stringify(user))
  window.location = '../index.html'
  console.log('Submited')
})
