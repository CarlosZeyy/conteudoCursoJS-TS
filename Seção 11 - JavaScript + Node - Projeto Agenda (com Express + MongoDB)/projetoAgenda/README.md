# Projeto Agenda

Sistema de agenda com autenticação de usuários, desenvolvido com Node.js, Express, MongoDB e frontend em JavaScript moderno.

## 🚀 Funcionalidades

- ✅ Sistema de cadastro (signup) com validação frontend e backend
- ✅ Sistema de login com validação frontend e backend
- ✅ Validação de email em tempo real
- ✅ Validação de senha forte (mínimo 8 caracteres, com maiúscula, minúscula, número e caractere especial)
- ✅ Validação de nome (aceita caracteres portugueses, espaços, hífens e apóstrofos)
- ✅ Mensagens de erro inline nos formulários
- ✅ Proteção contra CSRF
- ✅ Senhas criptografadas com bcrypt
- ✅ Sessões persistentes com MongoDB

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB (local ou MongoDB Atlas)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório e navegue até a pasta do projeto:
```bash
cd "Seção 11 - JavaScript + Node - Projeto Agenda (com Express + MongoDB)/projetoAgenda"
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com:
```
CONNECTIONSTRING=sua_string_de_conexao_mongodb
SECRET=sua_chave_secreta_para_sessoes
```

## 🏃 Como executar

### Desenvolvimento

1. Em um terminal, inicie o webpack em modo watch para compilar o frontend:
```bash
npm run dev
```

2. Em outro terminal, inicie o servidor Node.js:
```bash
npm start
```

3. Acesse a aplicação em `http://localhost:3000`

### Produção

1. Compile o frontend:
```bash
npx webpack --mode=production
```

2. Inicie o servidor:
```bash
node server.js
```

## 📁 Estrutura do Projeto

```
projetoAgenda/
├── frontend/                 # Código JavaScript do frontend
│   ├── modules/             # Módulos de validação
│   │   ├── Login.js         # Validação do formulário de login
│   │   └── Signup.js        # Validação do formulário de cadastro
│   ├── assets/              # CSS e outros assets
│   └── index.js             # Ponto de entrada do frontend
├── src/
│   ├── controllers/         # Controladores Express
│   ├── models/              # Modelos Mongoose
│   ├── middlewares/         # Middlewares customizados
│   └── views/               # Templates EJS
├── public/                  # Arquivos públicos servidos
│   └── assets/js/           # Bundle JavaScript compilado
├── routes.js                # Definição de rotas
├── server.js                # Servidor Express
└── webpack.config.js        # Configuração do Webpack
```

## 🛡️ Validações Frontend

### Login
- ✅ Email é obrigatório
- ✅ Email deve ter formato válido
- ✅ Senha é obrigatória

### Signup
- ✅ Nome é obrigatório
- ✅ Nome deve conter apenas letras, espaços, hífens ou apóstrofos
- ✅ Email é obrigatório
- ✅ Email deve ter formato válido
- ✅ Senha é obrigatória
- ✅ Senha deve ter entre 8 e 50 caracteres
- ✅ Senha deve conter:
  - Pelo menos uma letra maiúscula
  - Pelo menos uma letra minúscula
  - Pelo menos um número
  - Pelo menos um caractere especial (@$!%*?&)

## 🔒 Segurança

- Proteção CSRF em todos os formulários
- Senhas criptografadas com bcrypt (salt automático)
- Validação dupla (frontend e backend)
- Sanitização de dados de entrada
- Sessões seguras com express-session
- Headers de segurança com Helmet

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express 5
- MongoDB + Mongoose
- EJS (template engine)
- bcryptjs (criptografia de senhas)
- express-session (gerenciamento de sessões)
- connect-mongo (armazenamento de sessões)
- validator (validação de dados)
- helmet (segurança)

### Frontend
- JavaScript ES6+
- Webpack (bundler)
- Babel (transpilador)
- Bootstrap 5 (UI)
- CSS personalizado

### DevTools
- Nodemon (auto-reload do servidor)
- Webpack CLI

## 📝 Scripts Disponíveis

- `npm start` - Inicia o servidor em modo desenvolvimento com nodemon
- `npm run dev` - Inicia o webpack em modo watch
- `npm test` - Placeholder para testes (não implementado)

## 🤝 Melhorias Implementadas

As seguintes melhorias foram adicionadas ao projeto original:

1. **Validação Frontend Completa**: Reduz chamadas desnecessárias ao servidor
2. **Mensagens de Erro Inline**: Melhor UX com feedback imediato
3. **Prevenção de Empilhamento de Erros**: Erros anteriores são limpos antes de nova validação
4. **Validação Consistente**: Regras do frontend espelham as do backend
5. **.gitignore Configurado**: Exclui node_modules e arquivos de build do controle de versão

## 📚 Como Usar

### Criar uma Conta

1. Acesse `/signup`
2. Preencha o formulário com:
   - Nome e sobrenome
   - Email válido
   - Senha forte (seguindo os requisitos)
3. O formulário valida os dados antes de enviar ao servidor
4. Se houver erros, mensagens aparecem abaixo de cada campo
5. Após sucesso, você é redirecionado para a página de login

### Fazer Login

1. Acesse `/login`
2. Digite seu email e senha
3. A validação verifica os campos antes de enviar
4. Após login bem-sucedido, acesso à área logada

## 🐛 Resolução de Problemas

### O frontend não está validando
- Certifique-se de que executou `npm run dev` ou compilou o bundle
- Verifique se o arquivo `public/assets/js/bundle.js` existe
- Veja o console do navegador para erros JavaScript

### Erro de conexão com MongoDB
- Verifique se o MongoDB está rodando
- Confirme se a CONNECTIONSTRING no `.env` está correta
- Teste a conexão com MongoDB Compass ou mongo shell

### node_modules não foi ignorado pelo git
- Certifique-se de que o `.gitignore` existe na raiz do projeto
- Execute `git rm -r --cached node_modules` se necessário

## 📄 Licença

Este é um projeto educacional desenvolvido durante o curso de JavaScript e TypeScript.

## ✨ Autor

Carlos Zeyy - [GitHub](https://github.com/CarlosZeyy)
