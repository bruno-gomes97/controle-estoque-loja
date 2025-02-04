# Controle de Estoque - Bela Compra

Este é um sistema de controle de estoque para a empresa **Bela Compra**. A plataforma permite que funcionários gerenciem o cadastro de produtos e clientes de forma simples e eficiente.

## Funcionalidades

### Página de Login

- O sistema inicia com uma tela de login onde o vendedor pode inserir suas credenciais.
- Caso seja a primeira vez, ele pode se cadastrar, e os dados serão armazenados no **LocalStorage**.
- Se o vendedor já estiver cadastrado, ele será redirecionado para a tela onde os produtos estão cadastrados.

### Tela de Produtos

Após o login, o vendedor tem acesso à tela principal, onde pode gerenciar os produtos cadastrados. 

- **Menu de Opções**:
  - **Cadastrar Itens**: Permite adicionar novos produtos ao estoque.
  - **Cadastrar Clientes**: Abre um formulário para registrar clientes.
  - **Página de Clientes**: Direciona para a lista de clientes cadastrados.

- **Cadastro e Exibição de Produtos**:
  - Ao cadastrar um item, ele é armazenado no **LocalStorage** e exibido imediatamente na tela.
  - Cada produto possui as seguintes informações:
    - **Descrição**
    - **Tamanho**
    - **Preço de Custo**
    - **Preço de Venda**
    - **Fornecedor**

### Página de Clientes

Na página de clientes, o sistema busca os registros salvos no **LocalStorage** e exibe a lista de clientes cadastrados.

- **Gerenciamento de Clientes**:
  - Cada cliente aparece em um card contendo seu nome e informações básicas.
  - O vendedor pode clicar em **Visualizar Dados**, o que abre um modal com os detalhes completos do cliente.
  - No modal, há opções para:
    - **Editar Dados**: Permite modificar as informações do cliente.
    - **Excluir Cliente**: Remove o cliente do sistema.

## Fluxo de Uso

1. **Login/Cadastro**: O vendedor acessa a tela inicial e faz login. Caso não tenha cadastro, ele pode se registrar.
2. **Tela de Produtos**:
   - O vendedor pode cadastrar um novo item, que será armazenado no **LocalStorage** e exibido na lista automaticamente.
   - Pode navegar até a **Página de Clientes** através do menu.
3. **Gestão de Clientes**:
   - A lista de clientes cadastrados é exibida.
   - O vendedor pode visualizar, editar ou excluir os dados de um cliente.

## Tecnologias Usadas

- **Frontend**: React, Next.js (App Router)
- **Estilização**: Tailwind CSS
- **Armazenamento**: LocalStorage

![Tela Inicial](documentos/img-login.png)

![Kanban](documentos/img-2.png)
