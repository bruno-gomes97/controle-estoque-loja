const formModalCliente = document.getElementById("form-modal-cliente");
const mostraCliente = document.querySelector(".mostra-clientes");

let listaCliente = []

formModalCliente.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("input-nome").value.trim();
    const email = document.getElementById("input-email").value.trim();
    const telefone = document.getElementById("input-telefone").value.trim();
    const cpf_cnpj = document.getElementById("input-cpf-cnpj").value.trim();
    const endereco = document.getElementById("input-endereco").value.trim();

    let listaCliente = JSON.parse(localStorage.getItem("listaCliente")) || [];
    
    const cliente = {
        nome: nome,
        email: email,
        telefone: telefone,
        cpf_cnpj: cpf_cnpj,
        endereco: endereco
    }

    listaCliente.push(cliente);
    localStorage.setItem("listaCliente", JSON.stringify(listaCliente));
    formModalCliente.reset();

    exibirListaClientes();
})

function exibirListaClientes() {
    const clientes = buscarCliente(); 
    mostraCliente.innerHTML = ""

    clientes.forEach(element => {
        const { nome, telefone } = element;

        mostraCliente.innerHTML += `
        <div class="card m-2">
            <div class="card-body">
                <h5 class="card-title">${nome}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${telefone}</h6>
                <a href="#" class="card-link">Vizualizar dados</a>
            </div>
        </div>
        `;
    });
}

function buscarCliente() {
    return JSON.parse(localStorage.getItem("listaCliente")) || []
}

document.addEventListener("DOMContentLoaded", exibirListaClientes);
