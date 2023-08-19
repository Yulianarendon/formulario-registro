// Obtener el formulario por su id
var formulario = document.getElementById("registro");

// Añadir un evento submit al formulario
formulario.addEventListener("submit", function(event) {
  
  // Evitar el comportamiento por defecto del evento submit
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  var nombre = formulario.nombre.value;
  var email = formulario.email.value;
  var password = formulario.password.value;
  var confirmar = formulario.confirmar.value;

  // Obtener el elemento para mostrar mensajes
  var mensaje = document.getElementById("mensaje");

  // Validar que los campos no estén vacíos
  if (nombre === "" || email === "" || password === "" || confirmar === "") {
    mensaje.textContent = "Todos los campos son obligatorios";
    return;
  }

  // Validar que el correo electrónico tenga un formato válido
  if (!email.includes("@")) {
    mensaje.textContent = "El correo electrónico no es válido";
    return;
  }

  // Validar que la contraseña y la confirmación coincidan
  if (password !== confirmar) {
    mensaje.textContent = "Las contraseñas no coinciden";
    return;
  }

  // Crear un objeto con los datos del formulario
  var datos = {
    nombre: nombre,
    email: email,
    password: password
  };

  // Enviar los datos al servidor mediante Fetch API
  fetch("https://example.com/registro", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(function(response) {
    // Si la respuesta es exitosa, mostrar un mensaje de éxito
    if (response.ok) {
      mensaje.textContent = "Registro completado con éxito";
      mensaje.style.color = "green";
    } else {
      // Si la respuesta es errónea, mostrar un mensaje de error
      mensaje.textContent = "Error al registrar el usuario";
      mensaje.style.color = "red";
    }
  })
  .catch(function(error) {
    // Si ocurre un error en la petición, mostrar un mensaje de error
    mensaje.textContent = "Error al conectar con el servidor";
    mensaje.style.color = "red";
  });
});