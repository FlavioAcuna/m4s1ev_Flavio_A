document
  .getElementById("formularioContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("txtNombre").value;
    const apellido = document.getElementById("txtApellido").value;
    const correo = document.getElementById("txtCorreo").value;
    const motivo =
      document.getElementById("selectMotivo").options[
        document.getElementById("selectMotivo").selectedIndex
      ].text;
    const mensaje = document.getElementById("textAreaMensaje").value;
    alert(`DE: ${nombre} ${apellido} (${correo}) \n
       ASUNTO: ${motivo}\n
       MENSAJE: \n
       ${mensaje}`);
  });
