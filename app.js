//criar lista para guardar os amigos
let amigos = [];

//função para adicionar o amigo
function adicionarAmigo() {
let amigosAdicionados = document.querySelector('input').value;
    if (amigosAdicionados == ""){
        alert('Digite um nome, por favor!');
    } else {
        amigos.push(amigosAdicionados);
        limparCampo();
        listaDeAmigos(amigos);
    }
}

//função para limpar a lista
function limparCampo(){
    amigosAdicionados = document.querySelector('input');
    amigosAdicionados.value = '';
}

//função para fazer a lista de amigos
function listaDeAmigos(amigos){
    let lista = document.querySelector('ul');
    lista.innerHTML = '';

    amigos.forEach(function(amigos) {
        let novoAmigoAdicionado = document.createElement('li');
        novoAmigoAdicionado.innerHTML = amigos;
        lista.appendChild(novoAmigoAdicionado);
    });    
}

//função para sortear o amigo 
function sortearAmigo(){
    if(amigos == ''){
        alert('Você não possui amigos para sortear!!');
    } else {
        let indiceSorteio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML= amigoSorteado;
    }
}
