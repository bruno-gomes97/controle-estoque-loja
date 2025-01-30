const formModalCliente = document.getElementById("form-modal-cliente");

let listaCliente = []

formModalCliente.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("input-nome").value.trim();
    const email = document.getElementById("input-email").value.trim();
    const telefone = document.getElementById("input-telefone").value.trim();
    const cpf_cnpj = document.getElementById("input-cpf-cnpj").value.trim();
    const endereco = document.getElementById("input-endereco").value.trim();

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

})

function buscarCliente() {
    const cliente = localStorage.getItem("listaCliente");
    return cliente ? JSON.parse(cliente) : [];
}
