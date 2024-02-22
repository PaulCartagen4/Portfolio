// COPIAR EL CORREO ELECTRONICO DEL EMAIL

function copiarEmail(email) {
    // Crea un elemento de texto temporal
    var tempInput = document.createElement("input");
    tempInput.value = email;
  
    // Agrega el elemento temporal al DOM
    document.body.appendChild(tempInput);
  
    // Selecciona y copia el texto dentro del elemento temporal
    tempInput.select();
    document.execCommand("copy");
  
    // Elimina el elemento temporal
    document.body.removeChild(tempInput);
  }