// ICONO DE CAMBIO A DARK MODE

function toggleIcon() {
    let btn = document.getElementById('btn');

    // Toggle entre fa-moon y fa-sun
    btn.classList.toggle('fa-sun');
    btn.classList.toggle('fa-moon');
    btn.classList.toggle('botonDark');

    // Cambio a dark general
    const selector = document.querySelectorAll('.normal')
    for (const recorrer of selector){
      recorrer.classList.toggle('dark')
    } 

    // Cambio de color de boton resume
    const resume = document.querySelectorAll('.resume')
    for (const rc5 of resume){
      rc5.classList.toggle('buttonDark')
    } 

    // Cambio de color de boton live
    const live = document.querySelectorAll('.live')
    for (const rc6 of live){
      rc6.classList.toggle('liveDark')
    } 

    // Cambio de color de boton code
    const code = document.querySelectorAll('.code')
    for (const rc7 of code){
      rc7.classList.toggle('codeDark')
    } 

    // Cambio a dark del nombre
    const name = document.querySelectorAll('h1')
    for (const rc of name){
      rc.classList.toggle('headerDark')
    } 

    // Cambio a dark de la desc
    const descPa = document.querySelectorAll('p')
    for (rc2 of descPa){
      rc2.classList.toggle('descDark')
    } 

    // Cambio a dark de li
    const li = document.querySelectorAll('.bodyExperience')
    for (rc4 of li){
      rc4.classList.toggle('liDark')
    } 

    // Cambio a dark del borde 
    const borde = document.querySelectorAll('.fotoPerfil')
    for (const contorno of borde){
      contorno.classList.toggle('contornoPerfil')
    } 

    // Cambio a dark del fondo de img proyectos
    const fondo = document.querySelectorAll('.fotoProject')
    for (const ambos of fondo){
      ambos.classList.toggle('contornoProject')
    } 

    // Cambio a dark de subtitulos e iconos
    const descp = document.querySelectorAll('.desc')
    for (rc3 of descp){
      rc3.classList.toggle('subs')
    } 

    // Cambio a dark de botones de proyectos
    const sociales = document.querySelectorAll('.iconsSocials')
    for (rc7 of sociales){
      rc7.classList.toggle('redsDark')
    } 

    // GitHub
    const git = document.querySelectorAll('.gitHub')
    for (rc8 of git){
      rc8.classList.toggle('gitDark')
    } 

    // Input Email
    const inp = document.querySelectorAll('.blockIn')
    for (rc9 of inp){
      rc9.classList.toggle('blockDark')
    } 

    // Iconos Email
    const icn = document.querySelectorAll('.iconsEmail')
    for (rc10 of icn){
      rc10.classList.toggle('icnDark')
    } 
  }

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



  
  

  