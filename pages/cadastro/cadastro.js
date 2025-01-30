const formCadastro = document.getElementById("form");

let listaCadastro = []

if (localStorage.getItem("listaUsuario")) {
    listaCadastro = JSON.parse(localStorage.getItem("listaUsuario"));
}

formCadastro.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("input-name").value.trim();
    const email = document.getElementById("input-email").value.trim();
    const senha = document.getElementById("input-senha").value.trim();

    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    }

    listaCadastro.push(usuario);

    localStorage.setItem("listaUsuario", JSON.stringify(listaCadastro));
    formCadastro.reset();

    window.location.href = "../../index.html";
})