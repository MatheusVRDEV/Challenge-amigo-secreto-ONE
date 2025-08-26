let listaDeNomes = [];
let sorteioRealizado = false;

// adicionar amigo na lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;

// verificar se não vai adicionar nome vazio
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome válido");
    } 
    else {
        listaDeNomes.push(nomeAmigo);
        atualizarLista();
        document.getElementById("amigo").value = "";
    }
}

// atualizar a lista que está na tela 
function atualizarLista() {
    let listaVisivel = document.getElementById("listaAmigos");
    listaVisivel.innerHTML = "";

// adicionar os nomes na lista que aparece na tela
    for (let i = 0; i < listaDeNomes.length; i++) {
        let nome = listaDeNomes[i];
        let itemLista = document.createElement("li");
        itemLista.textContent = nome;
        listaVisivel.appendChild(itemLista);
    }
}

// função para sortear amigos
function sortearAmigo() {
  if (listaDeNomes.length === 0) {
    document.getElementById('resultado').innerHTML = "Adicione amigos à lista!";
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);
  const amigoSorteado = listaDeNomes[indiceAleatorio];

  // exibir o amigo sorteado e limpar a lista
  document.getElementById('resultado').innerHTML = "O amigo sorteado é: " + amigoSorteado;
  document.getElementById('listaAmigos').innerHTML = "";

  sorteioRealizado = true;
}