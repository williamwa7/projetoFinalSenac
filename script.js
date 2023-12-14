function salvar() {
    let nome = document.getElementById("fNome").value;
    let email = document.getElementById("fEmail").value;
    let telefone = document.getElementById("fTel").value;
    let cidade = document.getElementById("fCidade").value;
    let uf = document.getElementById("fUf").value;
    let credito = document.getElementById("fCredito").value;


    bodyTabela.innerHTML +=
        `<tr>
        <td>${"1"}</td>
        <td>${nome}</td>
        <td>${email}</td>
        <td>${telefone}</td>
        <td>${cidade}</td>
        <td>${uf}</td>
        <td>${credito}</td>
        <td class="d-flex justify-content-center"><button class="btn btn-danger" onclick="deletar()">X</button></td>
        </tr>`;
}

function deletar() {
    
}