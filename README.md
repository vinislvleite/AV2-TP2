# AV2 - Gerenciamento de Clientes

Sistema orientado a objetos em TypeScript para gerenciamento de clientes titulares e dependentes, documentos, endereços e telefones, utilizando persistência em memória e navegação via terminal.

---

## Como executar o projeto

### 1. Clone o repositório

---

### 2. Configuração e Dependências

Certifique-se de ter o Node.js instalado. Abra o terminal na raiz do projeto e instale as dependências necessárias:

~~~bash
npm i
~~~

---

### 3. Execução da aplicação

Execute a compilação e o arquivo principal através do terminal:

~~~bash
npx tsc
node src/js/app/app.js
~~~

* O comando `npx tsc` criará a pasta `js` com o código transpilado.
* O sistema será iniciado diretamente no console.

---

### 4. Navegação no Sistema

Ferramenta recomendada para uso: Terminal da sua IDE (VS Code) ou Prompt de Comando.
<br>
**Atenção:** Como este sistema utiliza armazenamento em memória (Runtime) e navegação por menus, o fluxo correto é **sempre criar o Cliente Titular primeiro**. As opções de dependentes, documentos, endereços e telefones exigem que um titular já exista no Armazém.

---

## Observações Finais
* O cadastro e a exclusão dependem da entidade Cliente Titular. Excluir um Cliente Titular removerá em cascata os seus respectivos dependentes, documentos, telefones e endereços da memória.
* Ao encerrar a execução no terminal, os dados cadastrados serão perdidos.
