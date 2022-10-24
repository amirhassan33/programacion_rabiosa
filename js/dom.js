document.getElementById("datos").innerHTML = "<p><strong>Autores:</strong><br>Cristian Alejandro Nasso - cristiannasso2@gmail.com<br>Leonardo Walter Rios - leon18s@hotmail.com<br>Dario Fernando Montesino - montesinodario@gmail.com</p>";

const nombre = document.getElementById("Nombre_completo");
const apellido = document.getElementById("Apellido");
const correo = document.getElementById("Correo_electronico");
const dni = document.getElementById("DNI");
const direccion = document.getElementById("Direccion");
const provincia = document.getElementById("Provincia");
const localidad = document.getElementById("Localidad");
const pais = document.getElementById("Pais");
const codigo_postal = document.getElementById("Codigo_postal");
const comentarios = document.getElementById("Comentarios");
const form = document.getElementById("form");
const paragraph = document.getElementById("warnings");

form.addEventListener("submit", e => {

  let validar_correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let entrar = false;
  let warnings = "";
  paragraph.innerHTML = "";

  if (nombre.value.length < 5) {
    warnings += `<strong><br>El nombre es muy corto</strong><br>`;
    entrar = true;
  }

  if (apellido.value.length < 5) {
    warnings += `<strong>El apellido es muy corto</strong><br>`;
    entrar = true;
  }

  if (!validar_correo.test(correo.value)) {
    warnings += `<strong>El correo electronico no es valido</strong><br>`
    entrar = true;
  }

  if (dni.value.length < 7 || dni.value.length > 8) {
    warnings += `<strong>El DNI no es valido</strong><br>`;
    entrar = true;
  }

  if (direccion.value.length < 5) {
    warnings += `<strong>La direccion es muy corta</strong><br>`;
    entrar = true;
  }

  if (provincia.value.length < 5) {
    warnings += `<strong>La provincia es muy corta</strong><br>`;
    entrar = true;
  }

  if (localidad.value.length < 5) {
    warnings += `<strong>La localidad es muy corta</strong><br>`;
    entrar = true;
  }

  if (codigo_postal.value.length != 4) {
    warnings += `<strong>El codigo postal no es valido</strong><br>`;
    entrar = true;
  }

  if (pais.value == "Elige el pais") {
    warnings += `<strong>Debes elegir un pais</strong><br>`;
    entrar = true;
  }

  if (comentarios.value == "") {
    warnings += `<strong>El comentario no puede estar vacio</strong><br>`;
    entrar = true;
  }

  if (entrar) {
    paragraph.innerHTML = warnings;
    e.preventDefault();
  } else {
    paragraph.innerHTML = "Se envio el formulario de forma correcta";
  }
})

