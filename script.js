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
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuros, jaqueta preta, sem barba e fundo azul na direita e roxo na esquerda."
    )
  } else {
    //se não tiver em light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos, camiseta preta, barba e fundo amarelo."
    )
  }
}
