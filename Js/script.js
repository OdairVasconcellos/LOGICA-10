let lista = {
    nome: [],
    telefone: [],
}

function alunos() {
    lista.nome.push(document.getElementById("nome").value),
        lista.telefone.push(document.getElementById("telefone").value),

        document.getElementById("classe").innerHTML = "Nome: " + lista.nome + " Telefone: " + lista.telefone;

}
