let clienteId = localStorage.length;
let statusSelecionado = "ativo"


function salvar() {
    clienteId++;
    const cliente = {
        idCliente: clienteId,
        nome: document.getElementById("fNome").value,
        email: document.getElementById("fEmail").value,
        telefone: document.getElementById("fTel").value,
        cidade: document.getElementById("fCidade").value,
        uf: document.getElementById("fUf").value,
        credito: document.getElementById("fCredito").value,
        status: "ativo"
    }
    localStorage.setItem(clienteId, JSON.stringify(cliente));
    document.getElementById("fEntrada").reset()
    mostrarClientes()

}

function deletar(idCliente) {

    const cliente = JSON.parse(localStorage.getItem(idCliente));
    cliente.status = "inativo"
    localStorage.setItem(idCliente, JSON.stringify(cliente));
    mostrarClientes()
}

function reativar(idCliente) {
    const cliente = JSON.parse(localStorage.getItem(idCliente));
    cliente.status = "ativo";
    localStorage.setItem(idCliente, JSON.stringify(cliente));
    mostrarClientes();
}


function mostrarClientes(select) {
    
    if (select) {
        statusSelecionado = select.value
    }
    const saida = document.getElementById("bodyTabela");
    
    saida.innerHTML = ""
    for (let i = 1; i <= localStorage.length; i++) {
        const cliente = JSON.parse(localStorage.getItem(i));
        let btnAcao = `
            <button class="btn ${cliente.status == "ativo" ? "btn-danger" : "btn-secondary"}" 
                onclick="${cliente.status == "ativo" ? "deletar" : "reativar"}(${cliente.idCliente})">
                ${cliente.status == "ativo" ? "Inativar" : "Reativar"}
            </button>`
        if (cliente.status == statusSelecionado) {
            saida.innerHTML +=
                `<tr id="cliente${cliente.idCliente}">
                    <td>${cliente.idCliente}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.telefone}</td>
                    <td>${cliente.cidade}</td>
                    <td>${cliente.uf}</td>
                    <td>${Number(cliente.credito).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td>${cliente.status}</td>
                    <td class="d-flex justify-content-center">${btnAcao}</td>
                </tr>`;
        } else if (statusSelecionado == "todos") {
            saida.innerHTML +=
                `<tr id="cliente${cliente.idCliente}">
                    <td>${cliente.idCliente}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.telefone}</td>
                    <td>${cliente.cidade}</td>
                    <td>${cliente.uf}</td>
                    <td>${Number(cliente.credito).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td>${cliente.status}</td>
                    <td class="d-flex justify-content-center">${btnAcao}</td>
                </tr>`;
        }

    }
}

