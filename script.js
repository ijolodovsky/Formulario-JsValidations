document.addEventListener("DOMContentLoaded", function () {

  const toggleButton = document.getElementById('toggle-dark-mode');
  
  toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('dark-mode')) {
      toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
      toggleButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
  });



  const togglePassword = document.getElementById('toggle-password');
  const password = document.getElementById('password');
  const togglePassword2 = document.getElementById('toggle-password2');
  const password2 = document.getElementById('password2');


  togglePassword.addEventListener('click', function () {
      const type = password.type === 'password' ? 'text' : 'password';
      password.type = type;
      this.classList.toggle('fa-eye-slash');
  });


  togglePassword2.addEventListener('click', function () {
      const type = password2.type === 'password' ? 'text' : 'password';
      password2.type = type;
      this.classList.toggle('fa-eye-slash');
  });

  const form = document.querySelector("form");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");


  nombre.addEventListener("blur", function () {
    if (!validateName(nombre.value.trim())) {
      nombre.classList.add("incorrect");
      nombre.classList.remove("correct");
      showError("nombre-error", "El nombre debe tener al menos 3 caracteres.");
    } else {
      nombre.classList.add("correct");
      nombre.classList.remove("incorrect");
      clearError("nombre-error");
    }
  });

  email.addEventListener("blur", function () {
    if (!validateEmail(email.value.trim())) {
      email.classList.add("incorrect");
      email.classList.remove("correct");
      showError("email-error", "Por favor ingrese un email válido.");
    } else {
      email.classList.add("correct");
      email.classList.remove("incorrect");
      clearError("email-error");
    }
  });

  password.addEventListener("blur", function () {
    if (!validatePassword(password.value.trim())) {
      password.classList.add("incorrect");
      password.classList.remove("correct");
      showError("password-error", "La contraseña debe tener al menos 8 caracteres.");
    } else {
      password.classList.add("correct");
      password.classList.remove("incorrect");
      clearError("password-error");
    }
  });

  password2.addEventListener("blur", function () {
    if (!validateRepeatPassword(password.value.trim(), password2.value.trim())) {
      password2.classList.add("incorrect");
      password2.classList.remove("correct");
      showError("password2-error", "Las contraseñas no coinciden.");
    } else {
      password2.classList.add("correct");
      password2.classList.remove("incorrect");
      clearError("password2-error");
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    
    if (!validateName(nombre.value.trim())) valid = false;
    if (!validateEmail(email.value.trim())) valid = false;
    if (!validatePassword(password.value.trim())) valid = false;
    if (!validateRepeatPassword(password.value.trim(), password2.value.trim())) valid = false;

    if (valid) {
      alert("Formulario enviado con éxito");
      form.submit();
    }
  });
});


function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
}


function clearError(id) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = "";
}


function validateName(nombre) {
  if (nombre.length < 3) {
    showError("nombre-error", "El nombre debe tener al menos 3 caracteres.");
    return false;
  }
  clearError("nombre-error");
  return true;
}


function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    showError("email-error", "Por favor ingrese un email válido.");
    return false;
  }
  clearError("email-error");
  return true;
}

function validatePassword(password) {
  if (password.length < 8) {
    showError("password-error", "La contraseña debe tener al menos 8 caracteres.");
    return false;
  }
  clearError("password-error");
  return true;
}


function validateRepeatPassword(password, repeatPassword) {
  if (password !== repeatPassword) {
    showError("password2-error", "Las contraseñas no coinciden.");
    return false;
  }
  clearError("password2-error");
  return true;
}
