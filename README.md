# Radio Browser

📻 Radio browser é um projeto de uma rádio online que faz você reviver os velhos tempos. 

[Radio Browser - Vercel](https://codesh-radio-browser.vercel.app/) 

[Radio Browser - Vercel2](https://codesh-radio-browser-carecanaclouds-projects.vercel.app/)

[Radio Browser - Vercel3](https://codesh-radio-browser-carecanacloud-carecanaclouds-projects.vercel.app/)

[Docker](https://hub.docker.com/r/ismaelbz/codesh-radio-browser/tags)

## Tecnologias utilizadas

- Vite
- TypeScript
- React.js
- Tailwind CSS


## Como Utilizar o projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Gerenciador de pacotes NPM

### Faça o download do repositório no seu computador

- Faça o download do códio .zip no seu computador
- Extraia os arquivos

Ou se preferir

- pode clonar o repositório utilizando o git através:

`git clone git@github.com:ismaelBZ/codesh-radio-challenge.git`

## Intale as dependências

Abra o terminal do seu computador no diretório do projeto e execute: 

`npm install`

## Rodando em Servido de Desenvolvimento

Após instalados os pacotes, execute no terminal:

`npm run dev`

<br>

>  This is a challenge by [Coodesh](https://coodesh.com/)

<br>


## Linha de Raciocínio Utilizada para resolução do challenge

### 1. Análise do Challenge  
- Ler e entender bem as informações fornecidas para o desafio.  
- Identificar as tecnologias exigidas: **HTML5, Git, TypeScript, React.js, JavaScript e Tailwind CSS**.  

### 2. Configuração do Projeto  
- Criar a estrutura inicial do projeto utilizando as tecnologias solicitadas.  
- Garantir que os requisitos obrigatórios estejam sempre visíveis durante o desenvolvimento.  
- Fazer o download dos ícones do **Figma** para manter a consistência visual.  

### 3. Desenvolvimento do Frontend  
- Implementar a estrutura base seguindo o conceito **mobile-first**.  
- Criar componentes reutilizáveis e organizar a estrutura de pastas.  
- Iniciar a codificação estática da interface.  

### 4. Mock de Dados e Comunicação entre Componentes  
- Criar dados mockados para testar o comportamento e a interação entre os componentes.  
- Analisar a melhor forma de estruturar os estados para manter a sincronia entre os elementos.  

### 5. Dificuldades Encontradas e Soluções  

#### 🛠 Gerenciamento do estado da edição da rádio favorita (onClick fora dos inputs)  
- **Problema:** O evento `onClick` deveria fechar a edição caso o usuário clicasse fora dos inputs, mas `document.activeElement` ainda não havia sido atualizado no momento do `onBlur`.  
- **Solução Inicial:** Comparar `document.activeElement` com os IDs dos inputs (não funcionou devido à ordem de atualização do DOM).  
- **Solução Final:** Adicionar um `setTimeout` de alguns milissegundos para permitir que a verificação ocorra após a atualização do `activeElement`.  

#### 🎵 Sincronização do estado de play/pause entre os componentes `RadioItem` e `CurrentRadio`  
- **Problema:** Ao tocar uma rádio favorita (`RadioItem`), o estado da `CurrentRadio` era atualizado corretamente, mas os outros itens da lista de favoritas não refletiam o estado real de play/pause.  
- **Solução Inicial:** Criar uma propriedade dentro de `CurrentRadio` para armazenar o estado atual da tag `<audio>`. *(Não funcionou porque os outros `RadioItem` não estavam sincronizados.)*  
- **Solução Final:** Utilizar um `useEffect` para monitorar mudanças no estado da `CurrentRadio` e garantir que todas as rádios favoritas atualizem corretamente seus estados.  

### 6. Implementação das Requisições Dinâmicas  
- Utilização da **Fetch API** para consumir os dados da API de rádios.  
- **Atenção ao CORS:** A API requer um **header básico** para evitar erros de CORS.  
- Identificação de uma biblioteca existente para facilitar as requisições: [`radio-browser`](https://www.npmjs.com/package/radio-browser).  
- Implementação de filtros de busca personalizados de acordo com as rotas do projeto. 

### 7. Salvar os dados na sessão do usuário
- Utilizar a propriedade localStorage do objeto window para armazenar os dados dos usuários localmente no navegador

### 8. Fazer o deploy da aplicação
- Instalação do Vercel CLI
- Fazer o build da aplicação vite
- Fazer o deploy para Vercel
