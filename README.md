# Desenvolvimento-Web-Front-End-UniAcademia-2023

# Shopping Futuro

Este é um aplicativo de compras online chamado "Shopping Futuro". O aplicativo permite que os usuários cadastrem-se para acessar as funcionalidades de compra e navegação pelas lojas disponíveis.

## Tecnologias utilizadas

O aplicativo utiliza as seguintes tecnologias:

- React: uma biblioteca JavaScript para construção de interfaces de usuário.
- React Router: uma biblioteca para roteamento de páginas em aplicações React.
- Reactstrap: uma biblioteca de componentes de interface de usuário baseada no Bootstrap.
- HTML e CSS: para a estruturação e estilização do aplicativo.

## Instalação

Siga as etapas abaixo para executar o aplicativo em seu ambiente local:

1. Certifique-se de ter o Node.js instalado em seu computador.
2. Faça o download ou clone este repositório.
3. Navegue até o diretório do projeto no terminal.
4. Execute o comando `npm install` para instalar as dependências.
5. Execute o comando `npm start` para iniciar o servidor de desenvolvimento.
6. O aplicativo estará disponível em `http://localhost:3000` no seu navegador.

## Funcionalidades

O aplicativo "Shopping Futuro" possui as seguintes funcionalidades:

### Página inicial

- Exibe uma mensagem de boas-vindas no cabeçalho.
- Mostra um carrossel com imagens representativas do shopping.

### Navegação pelas lojas

- Ao preencher um formulário de cadastro, os usuários podem acessar as lojas disponíveis.
- O formulário de cadastro solicita as seguintes informações: nome, e-mail, CPF, idade e WhatsApp.
- Os dados do formulário de cadastro são armazenados localmente no navegador.

### Páginas das lojas

- Cada loja possui uma página individual com informações e produtos.
- As páginas das lojas são acessadas por meio de links na página inicial.

### Modal de confirmação de cadastro

- Após o envio do formulário de cadastro, um modal de confirmação é exibido.
- O modal exibe os dados preenchidos no formulário para revisão.
- Os usuários podem confirmar ou cancelar o cadastro por meio do modal.

## Estrutura do código-fonte

A estrutura do código-fonte está organizada da seguinte forma:

- O arquivo `App.js` é o componente principal que define a estrutura básica do aplicativo, incluindo o cabeçalho, carrossel, conteúdo principal, rodapé e formulário de cadastro.
- Os componentes relacionados ao cabeçalho, carrossel e rodapé estão localizados na pasta `components`.
- O componente `Main.js` representa a página inicial e exibe as lojas disponíveis.
- Os componentes relacionados às lojas individuais estão localizados na pasta `components/Lojas`.
- O componente `FormCadastro.js` representa o formulário de cadastro e sua lógica.
- Os estilos CSS estão localizados na pasta `css`.

## Contribuição

Contribuições para melhorias e novas funcionalidades são bem-vindas! Se você encontrar um problema ou tiver sugestões para o aplicativo, sinta-se à vontade para abrir uma issue ou enviar uma pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT). Sinta-se à vontade
