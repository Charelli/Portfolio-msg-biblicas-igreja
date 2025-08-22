# 📖 Mensagens App


Este projeto é uma aplicação web simples para cadastro e busca de mensagens. A aplicação permite que os usuários cadastrem mensagens, busquem por elas, filtrem por livros da Bíblia e visualizem detalhes de cada mensagem. Aplicação simples em **HTML, CSS e JavaScript** para **cadastro e busca de mensagens bíblicas**.
------------------------------------------------------------------------

## ✨ Funcionalidades

-   Cadastro de mensagens com os campos:
    -   **Título**
    -   **Data**
    -   **Pregador**
    -   **Referência Bíblica**
-   Validação de **campos obrigatórios**.
-   Exibição de **pop-up de confirmação** antes de salvar.
-   Busca de mensagens por:
    -   Título
    
------------------------------------------------------------------------

## 🚀 Tecnologias utilizadas

-   **HTML5**\
-   **CSS3**\
-   **JavaScript (Vanilla)**\
-   **Cypress** (para testes automatizados)

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

A estrutura de pastas do projeto está organizada da seguinte forma:

    mensagens-app-project/
    │── .vscode/                 # Configurações do VS Code
    │── cypress/                 # Testes automatizados
    │   ├── e2e/                 # Casos de teste de ponta a ponta
    │   │    └── adicionarmsg.cy.js
    │   ├── fixtures/            # Massa de dados para testes
    │   └── support/             # Configurações e comandos customizados do Cypress
    │── mensagens-app/           # Código da aplicação (HTML, CSS, JS)
    │── node_modules/            # Dependências do projeto
    │── .gitignore
    │── cypress.config.js        # Configuração do Cypress
    │── mensagens-app.zip        # Arquivo compactado da aplicação
    │── package.json             # Dependências e scripts do projeto
    │── package-lock.json
    │── README.md

------------------------------------------------------------------------

## ⚙️ Como rodar o projeto

### 1. Pré-requisitos

-   Ter um **navegador atualizado** (Chrome, Edge, Firefox, etc.)
-   Ter o código do projeto (copiar a pasta `mensagens-app-project/`
    para sua máquina).
-   Para rodar os testes automatizados, é necessário ter o **Node.js**
    instalado.

------------------------------------------------------------------------

### 2. Executando localmente

1.  Baixe ou clone este repositório:

    ``` bash
    git clone https://github.com/Charelli/Portfolio-msg-biblicas-igreja.git
    ```

2.  Acesse a pasta do projeto:

    ``` bash
    cd mensagens-app-project
    ```

3.  Abra o arquivo `mensagens-app/index.html` em um navegador (clique
    duas vezes no arquivo ou botão direito → **Abrir com navegador**).

------------------------------------------------------------------------

### 3. Executando em outra máquina

Para rodar o projeto em **outra máquina** dentro da mesma rede local:

1.  Certifique-se de ter o **VS Code** instalado.\

2.  Instale a extensão **Live Server** no VS Code.\

3.  Abra o projeto no VS Code → clique com botão direito em `index.html`
    → **Open with Live Server**.\

4.  O projeto abrirá em um endereço como:

        http://localhost:3000

5.  Para acessar de outra máquina da mesma rede:

    -   Descubra o **IP da máquina hospedeira** (no Windows, use
        `ipconfig`; no Linux/Mac, use `ifconfig`).\

    -   No navegador da outra máquina, acesse:

            http://localhost:3000/

        Exemplo:

            http://192.168.0.105:3000

Agora o projeto pode ser usado em qualquer dispositivo conectado na
mesma rede 🎉

------------------------------------------------------------------------

## 🧪 Testes

### ✅ Testes manuais

Foram definidos casos de teste (CT-01 a CT-18) para validar: - Cadastro
com e sem campos obrigatórios. - Funcionamento do pop-up de
confirmação. - Busca por título, pregador, data e versículo.

### 🤖 Testes automatizados com Cypress

O projeto possui **testes automatizados** usando o **Cypress**, que
validam o fluxo de cadastro e busca.

#### Como rodar os testes Cypress:

1.  Instale as dependências:

    ``` bash
    npm install
    ```

2.  Abra o Cypress:

    ``` bash
    npx cypress open
    ```

3.  Execute os testes disponíveis na pasta:

        cypress/e2e/

    Exemplo de teste já implementado: `adicionarmsg.cy.js`

4.  O Cypress abrirá a interface interativa para acompanhar os testes.

------------------------------------------------------------------------

## 📜 Licença

Este projeto é de uso livre para estudos e melhorias.
Este projeto foi criado para fins de estudo e aprimoramento profissional, seguindo as orientações da Mentoria 2.0.
Feito com dedicação para compor um portfólio pessoal profissional.

🌸 Desenvolvido por:
 Lays Charelli 
