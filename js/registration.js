function togglePassword(fieldId, toggleButton) {
    const passwordField = document.getElementById(fieldId);
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleButton.textContent = "🙈"; // Иконка для "скрыть пароль"
    } else {
      passwordField.type = "password";
      toggleButton.textContent = "👁️"; // Иконка для "показать пароль"
    }
  }
  