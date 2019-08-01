//confirm('Ola! Deseja Algo?')

function carregar(){
    var boas = document.querySelector('div#hora > h2')
    var foto = document.querySelector('div#foto img#imagem')
    var hora = document.querySelector('div#hora > h3')
    var data = new Date()
    var agora = data.getHours()
    //var agora = 8 // linha para teste
    hora.innerHTML = `${agora} horas!`
    if(agora >= 12 && agora < 18){
        boas.innerHTML = `Boa Tarde!`
        foto.src = '../img/tarde.jpg'
        document.body.style.background = '#e46636'
    }else if(agora >=0 && agora < 12 ){
        boas.innerHTML = `Bom Dia!`
        foto.src = '../img/manha.jpg'
        document.body.style.background = '#ffda44'
    }else{
        boas.innerHTML = `Boa Noite!`
        foto.src = '../img/noite.jpg'
        document.body.style.background = '#3268a4'
    }

    
    
}