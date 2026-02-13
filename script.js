const form = document.getElementById("contactoForm");
    const respuesta = document.getElementById("respuesta");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;

      respuesta.textContent = `Gracias ${nombre}, nos pondremos en contacto contigo pronto 🚗`;
      respuesta.style.color = "green";

      form.reset();
    });