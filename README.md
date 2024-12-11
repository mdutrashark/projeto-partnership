<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
# Projeto-Partnership - Grupo09

## Objetivo

Este repositório é destinado ao desenvolvimento de uma LandingPage para apresentação da do produto Partnership, um programa de parceria voltado para a premiação de profissionais e lojas de Art&Decor. O projeto inclui desenvolvimento front-end em HTML, CSS e React JS.


Criar um site e uma landing page que apresente o projeto a empresa PlugowTech e o programa Partnership, com informações atrativas e uma interface amigável. A página deve permitir interação básica com o back-end para coleta e exibição de dados dinâmicos. 

## Tecnologias utilizadas

- **Front-end:** HTML, CSS, JavaScript, React 
- **Controle de Versão:** Git e GitHub
- **Gerenciamento de Dependências:** npm
- **Ferramentas de Design UX/UI:** Figma, Photoshop e Canva

## Estrutura do projeto

```bash
projeto-partnership/
├── uxui/
│   ├── wireframes/              # Protótipos e wireframes
│   └── design/                  # Arquivos de design (Figma, Sketch, etc.)
├── frontend/
│   ├── public/
│   │   ├── index.html           # Página principal da landing page
│   │   └── favicon.ico          # Ícone do site
│   ├── src/
│   │   ├── assets/              # Imagens, fontes e outros assets
│   │   ├── components/          # Componentes reutilizáveis
│   │   ├── pages/               # Páginas do projeto
│   │
│   │   ├── services/            # Serviços para chamadas de API
│   │   ├── App.js               # Componente principal do React
│   │   └── index.js             # Arquivo principal de entrada
│   └── package.json             # Dependências do frontend
├── .gitignore
├── README.md                    # Documentação do projeto, instruções e convenções de branches
```

## Configuração do ambiente de desenvolvimento
### Requisitos
- Git: Controle de versão
- Vite: 
- npm: Gerenciador de pacotes para Node.js
- Banco de dados SQLite
- Editor de Código: Visual Studio Code

## Passos para configuração do fluxo de trabalho
```bash

# Fork do repositório e clone
git clone https://github.com/seu-usuario/equipe07.git
cd equipe07

# Configurar upstream
git remote add upstream https://github.com/codigocerto/equipe07.git

# Sincronizar com develop
git fetch upstream
git checkout -b develop --track upstream/develop
git pull upstream develop

# Criar e configurar branches
git checkout develop
git checkout -b uxui   # ou frontend, backend, database, qa

# Trabalhar em uma feature
git checkout uxui     # ou frontend, backend, database, qa
git checkout -b feature/uxui-nome-da-feature

# Implementar mudanças
git add .
git commit -m "Descrição clara do que foi feito"
git push origin feature/uxui-nome-da-feature

# Criar um Pull Request para a branch
1. Vá para o repositório forkado no GitHub.
2. Clique em Compare & pull request.
3. Preencha a descrição para o pull request e crie o PR para a sua branch (frontend, backend, database ...) no repositório principal.

# manter o fork sincronizado
Sincronize seu fork regularmente para evitar conflitos.
Sempre trabalhe na branch de desenvolvimento (develop, backend, frontend...) e crie sub-branches para features específicas.
```
## Convenção de branches
Cada membro do grupo deve seguir o fluxo de trabalho definido acima e as seguintes convenções de branches:

```bash
Estrutura de Branches

- **`main`:** Código estável e pronto para produção.
- **`develop`:** Integração contínua de desenvolvimento.
- **`uxui`:** Desenvolvimento de protótipos e design de interfaces.
- **`frontend`:** Desenvolvimento do front-end.
- **`backend`:** Desenvolvimento do back-end.
- **`database`:** Gerenciamento do banco de dados.
- **`feature/frontend-nome-da-feature`:** Para novas funcionalidades. # feature/nome da stack-nome da feature
- **`bugfix/nome-do-bug`:** Para correções de bugs.
>>>>>>> 114ceac1ab4678a26979de62043386722249c90e
