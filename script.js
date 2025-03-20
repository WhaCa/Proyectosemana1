function cambiarColor() {
  document.body.style.color =
    document.body.style.color === "gold" ? "firebrick" : "gold";
}

function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  if (nombre === "") {
      alert("Por favor, ingresa tu nombre.");
      return false;
  }
  if (email === "") {
      alert("Por favor, ingresa tu correo electrónico.");
      return false;
  } else if (!validarEmail(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false;
  }
  return true;
}

function validarEmail(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}