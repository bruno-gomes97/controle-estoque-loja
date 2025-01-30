const formModal = document.getElementById("form-modal");
const cardContainer = document.querySelector(".card-container");

let listaProduto = []

formModal.addEventListener("submit", (e) => {
    e.preventDefault();

    const descricao = document.getElementById("input-descricao").value.trim();
    const tamanho = document.getElementById("select-tamanho").value;
    const fornecedor = document.getElementById("input-fornecedor").value.trim();
    const precoCusto = Number(document.getElementById("input-preco-custo").value.trim());
    const precoVenda = Number(document.getElementById("input-preco-venda").value.trim());
    const quantidade = document.getElementById("input-quantidade").value.trim();

    const produto = {
        descricao: descricao,
        tamanho: tamanho,
        fornecedor: fornecedor,
        precoCusto: precoCusto,
        precoVenda: precoVenda,
        quantidade: quantidade
    }

    const listaProduto = buscarItens();

    listaProduto.push(produto);

    localStorage.setItem("listaProduto", JSON.stringify(listaProduto));

    formModal.reset();

    exibirItens();
});

function buscarItens() {
    const item = localStorage.getItem("listaProduto");
    return item ? JSON.parse(item) : [];
}

function exibirItens() {
    const itens = buscarItens();
    cardContainer.innerHTML = "";  

    itens.forEach(element => {
        const { descricao, tamanho, quantidade } = element;

        cardContainer.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <p class="border h-100 text-center d-flex justify-content-center align-items-center">imagem</p>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p class="card-text">Descrição: ${descricao}</p>
                        <p class="card-text"><small class="text-body-secondary">Tamanho: ${tamanho}</small></p>
                        <p class="card-text"><small class="text-body-secondary">Quantidade: ${quantidade} unidades</small></p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", exibirItens);