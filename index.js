const button = document.getElementById('buttonSubmit')
let email = document.getElementById('email')
let password = document.getElementById('password')
let error = document.getElementById('errorSpan')
let signup = document.getElementById('signup')
let body = document.getElementById('body')

email.addEventListener('focus', clearText)
password.addEventListener('focus', clearText)
function clearText () {
  if (error.value !== '') {
    error.innerHTML = ''
  }
}
password.addEventListener('change', lenghtPassword)
function lenghtPassword () {
  console.log(password.value)
}

button.addEventListener('click', buttonSubmited)
function buttonSubmited () {
  if (localStorage.getItem(email.value) !== null) {
    const user = JSON.parse(localStorage.getItem(email.value))
    console.log('El usuario si existe!')
    console.log(JSON.parse(localStorage.getItem(email.value)))
    if (password.value !== user.password) {
      error.innerHTML = 'Las credenciales no coinciden'
      return
    } else {
      error.innerHTML = 'Las credenciales son correctas!'
      if (localStorage.getItem !== null) {
        localStorage.removeItem('name')
      }
      localStorage.setItem('name', `${user.lastname + ' ' + user.name}`)
      window.location = './main/main.html'
      return
    }
  }

  if (localStorage.getItem(email.value) === null) {
    error.innerHTML = 'El usuario no existe'
  }

  if (email.value === '' || password.value === '') {
    error.innerHTML = 'Por favor digite credenciales!'
    return
  }
}

signup.addEventListener('click', () => {
  window.location = './signup/signup.html'
})
