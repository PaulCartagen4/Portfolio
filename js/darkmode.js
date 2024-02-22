// ICONO DE CAMBIO A DARK MODE

function toggleIcon() {
  let btn = document.getElementById('btn');

  // Toggle entre fa-moon y fa-sun
  btn.classList.toggle('fa-sun');
  btn.classList.toggle('fa-moon');
  btn.classList.toggle('botonDark');

  // Cambio a dark general
  const selector = document.querySelectorAll('.normal')
  for (const recorrer of selector) {
    recorrer.classList.toggle('dark')
  }

  // Cambio de color de botón 'resume'
  const resumeButtons = document.querySelectorAll('.resume');
  for (const button of resumeButtons) {
    button.classList.toggle('buttonDark');
  }

  // Cambio a modo oscuro del nombre
  const headerNames = document.querySelectorAll('h1');
  for (const headerName of headerNames) {
    headerName.classList.toggle('headerDark');
  }

  // Cambio a modo oscuro del texto descriptivo
  const descriptionParagraphs = document.querySelectorAll('p');
  for (const paragraph of descriptionParagraphs) {
    paragraph.classList.toggle('descDark');
  }

  /// Cambio a modo oscuro de elementos de lista
  const listItems = document.querySelectorAll('.bodyExperience');
  for (const listItem of listItems) {
    listItem.classList.toggle('liDark');
  }

  // Cambio a modo oscuro del borde de la foto de perfil
  const profilePictureBorders = document.querySelectorAll('.fotoPerfil');
  for (const border of profilePictureBorders) {
    border.classList.toggle('contornoPerfil');
  }

  // Cambio a modo oscuro del fondo de las imágenes de proyectos
  const projectImageBackgrounds = document.querySelectorAll('.fotoProject');
  for (const background of projectImageBackgrounds) {
    background.classList.toggle('contornoProject');
  }

  // Cambio a modo oscuro de subtítulos e iconos
  const subtitlesAndIcons = document.querySelectorAll('.desc');
  for (const element of subtitlesAndIcons) {
    element.classList.toggle('subs');
  }

  // Cambio a modo oscuro de botones de proyectos sociales
  const socialButtons = document.querySelectorAll('.iconsSocials');
  for (const button of socialButtons) {
    button.classList.toggle('redsDark');
  }

  // GitHub
  const gitDark = document.querySelectorAll('.gitHub')
  for (git of gitDark) {
    git.classList.toggle('gitDark')
  }

  // Input Email
  const inpEmail = document.querySelectorAll('.blockIn')
  for (input of inpEmail) {
    input.classList.toggle('blockDark')
  }

  // Iconos Email
  const icnEmail = document.querySelectorAll('.iconsEmail')
  for (icn of icnEmail) {
    icn.classList.toggle('icnDark')
  }
}







