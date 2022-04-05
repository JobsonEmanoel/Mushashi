$(document).ready(function(){
    
    $("#barras").click(function(){
        $("menu").toggleClass("#menu-ativo")

    //         $("menu").removeClass("#menu-ativo")
    //     }else{
    //         $("menu").addClass("menu-ativo")
    //     }
    // })
    })
})

let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

let listaNoticia = [
    {
        titulo: "Brasil leva 1 gol no incio do jogo",
        descricao: "Houve um falha de defesa brasileira, que deixo atacante advesário cara a cara com o gol"
    },
    {
        titulo: "O doloar está alto",
        descricao: "O dola está realmente muito alto, não to saindo pra lado nenhum"
    },
    {
        titulo: "Brasil leva 1 gol no incio do jogo",
        descricao: "Houve um falha de defesa brasileira, que deixo atacante advesário cara a cara com o gol"
    },
    {
        titulo: "O doloar está alto",
        descricao: "O dola está realmente muito alto, não to saindo pra lado nenhum"
    },
    
]

function renderizarNoticias(){
    let espaco = document.getElementById("espaco-noticias")

    let template = "";

    for (let index = 0; index < listaNoticia.length; index++) {
        const noticias = listaNoticia[index];

        template += `<div class="cardnews">
        <img src="img/noticia 1.png" alt="Foto dos acessorios">
        <h3>${noticias.titulo}</h3>
        <p>${noticias.descricao}</p>
    </div>`
    }

    espaco.innerHTML = template;
}
