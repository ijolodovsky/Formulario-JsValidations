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


  const form = document.querySelector("form");
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const password2Input = document.getElementById("password2");

  form.addEventListener("input", function () {
    if (!validateName(nombreInput.value.trim())) {
      nombreInput.classList.add("incorrect");
      nombreInput.classList.remove("correct");

      showError("nombre-error", "El nombre debe tener al menos 3 caracteres.");
    } else {
      nombreInput.classList.add("correct");
      nombreInput.classList.remove("incorrect");
      clearError("nombre-error");
    }

    if (!validateEmail(emailInput.value.trim())) {
      emailInput.classList.add("incorrect");
      emailInput.classList.remove("correct");
      showError("email-error", "Por favor ingrese un email válido.");
    } else {
      emailInput.classList.add("correct");
      emailInput.classList.remove("incorrect");
      clearError("email-error");
    }

    if (!validatePassword(passwordInput.value.trim())) {
      passwordInput.classList.add("incorrect");
      passwordInput.classList.remove("correct");

      showError(
        "password-error",
        "La contraseña debe tener al menos 8 caracteres."
      );
    } else {
      passwordInput.classList.add("correct");
      passwordInput.classList.remove("incorrect");
      clearError("password-error");
    }

    if (
      !validateRepeatPassword(
        passwordInput.value.trim(),
        password2Input.value.trim()
      )
    ) {
      password2Input.classList.add("incorrect");
      password2Input.classList.remove("correct");

      showError("password2-error", "Las contraseñas no coinciden.");
    } else {
      password2Input.classList.add("correct");
      password2Input.classList.remove("incorrect");
      clearError("password2-error");
    }

    // Validación al enviar el formulario
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let valid = true;

      // Verificar si todas las validaciones son correctas al enviar el formulario
      if (!validateName(nombreInput.value.trim())) valid = false;
      if (!validateEmail(emailInput.value.trim())) valid = false;
      if (!validatePassword(passwordInput.value.trim())) valid = false;
      if (
        !validateRepeatPassword(
          passwordInput.value.trim(),
          password2Input.value.trim()
        )
      )
        valid = false;

      if (valid) {
        alert("Formulario enviado con éxito");
        form.submit(); // Aquí puedes enviar el formulario si todo es válido
      }
    });
  });
});

// Función para mostrar los errores
function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
}

// Función para borrar los errores
function clearError(id) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = "";
}

// Validar nombre
function validateName(nombre) {
  if (nombre.length < 3) {
    showError("nombre-error", "El nombre debe tener al menos 3 caracteres.");
    return false;
  }
  clearError("nombre-error");
  return true;
}

// Validar email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    showError("email-error", "Por favor ingrese un email válido.");
    return false;
  }
  clearError("email-error");
  return true;
}

// Validar contraseña
function validatePassword(password) {
  if (password.length < 8) {
    showError(
      "password-error",
      "La contraseña debe tener al menos 8 caracteres."
    );
    return false;
  }
  clearError("password-error");
  return true;
}

// Validar confirmación de contraseña
function validateRepeatPassword(password, repeatPassword) {
  if (password !== repeatPassword) {
    showError("password2-error", "Las contraseñas no coinciden.");
    return false;
  }
  clearError("password2-error");
  return true;
}
