function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem

  if (html.classList.contains("light")) {
    //se tiver em light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/perfil-light.png")
    img.setAttribute(
      "alt",
      "Linhas diagonais, ponta inferior esquerda até a ponta superior direita, cores roxas e azuis escuras."
    )
  } else {
    //se não tiver em light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar-perfil.png")
    img.setAttribute(
      "alt",
      "Universo, tons roxos e muitos pontinhos claros (estrelas, planetas...). "
    )
  }
}
