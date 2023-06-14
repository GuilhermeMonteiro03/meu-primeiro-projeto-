function togglemode(){
    const html = document.documentElement

   // if(html.classList.contains('light')){
   //     html.classList.remove('light')
   // } else{
   //     html.classList.add('light')
   //  }

   html.classList.toggle('light')

   // pegar a tag img
   const img= document.querySelector("#profile img")

   // substituir a imagem
   if(html.classList.contains('light')){
   // se tiver light mode, adicionar a imagem light
   img.setAttribute('src', './assets/perfil-light.png')
   }else{
   // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/perfil.png')
   }

   if(html.classList.contains('light')){
    // se tiver light mode, adicionar texto na imagem "com light mode" caso não seja apresentado
    img.setAttribute('alt', 'foto de perfil com light mode')
    }else{
    // se tiver sem light mode,  adicionar texto na imagem "com light mode" caso não seja apresentado
     img.setAttribute('alt', 'foto de perfil sem light mode')
    }


}