document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ Inicializamos EmailJS con tu clave pública
  emailjs.init("G1Y2RQWmDjMYfoW9J"); // Ejemplo: emailjs.init("public_XYZ123abc");

  // 2️⃣ Tomamos el formulario
  const form = document.getElementById("form-domicilio");
  const mensaje = document.getElementById("mensaje");

  // 3️⃣ Escuchamos el envío
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 4️⃣ Capturamos los datos del formulario
    const data = {
      nombre: document.getElementById("nombre").value.trim(),
      direccion: document.getElementById("direccion").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      fecha: document.getElementById("fecha").value,
      hora: document.getElementById("hora").value,
      personas: document.getElementById("personas").value,
      notas: document.getElementById("notas").value.trim(),
    };

    // 5️⃣ Validación básica
    if (Object.values(data).some(v => !v)) {
      mensaje.innerHTML = "<p style='color:red;'>Por favor completa todos los campos requeridos.</p>";
      return;
    }

    // 6️⃣ Enviamos el correo usando EmailJS
    emailjs.send("service_developer", "template_of2lshb", data)
      .then(() => {
        mensaje.innerHTML = `<p style="color:green;">✅ Tu solicitud fue enviada con éxito. ¡Gracias, ${data.nombre}!</p>`;
        form.reset();
      })
      .catch((error) => {
        mensaje.innerHTML = `<p style="color:red;">❌ Error al enviar la solicitud: ${error.text}</p>`;
      });
  });
});