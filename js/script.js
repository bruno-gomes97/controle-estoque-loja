const formLogin = document.getElementById("form")

function buscarListaUsuarios() {
    const lista = localStorage.getItem("listaUsuario");
    return lista ? JSON.parse(lista) : [];
}

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("input-email").value.trim();
    const senha = document.getElementById("input-senha").value.trim();

    const listaUsuarios = buscarListaUsuarios();

    const usuario = listaUsuarios.find(usuario => usuario.email === email && usuario.senha === senha)

    if(usuario) {
        alert("Login bem-sucedido!")
    } else {
        alert("Usuário ou senha incorretos!");
    }
})