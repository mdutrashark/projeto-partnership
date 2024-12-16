# Projeto Partnership - Grupo-09

## Objetivo

Este projeto teve por objetivo desenvolver uma Landing Page para apresentação do produto Partnership através de um site SPA (Single Page Aplication), com informações atrativas e uma interface amigável e possibilidade do usuário fazer contato de maneira fácil e eficaz através de botão de whatsapp e/ou formulário. 

## Tecnologias utilizadas

- **Front-end:** HTML, CSS, React 
- **Controle de Versão:** Git e GitHub
- **Gerenciamento de Dependências:** npm
- **Ferramentas de Design:** Figma

## Estrutura do projeto

```bash
projeto-partnership/
|
├── .vscode
|
├── frontend
|   ├── design                   # Arquivos de design (Figma, Sketch, etc.)                                   
|   ├── dist                     # Arquivos da build para deploy
|   ├── node-module              # Dependências do Node.JS
│   ├── public/                  # Arquivos acessíveis a todos
│   │   
│   ├── src/
│   │   ├── assets/              # Imagens, fontes e outros assets
│   │   ├── components/          # Componentes reutilizáveis
│   │   ├── pages                # Páginas do projeto
|   |   └── Home                 # Página principal do projeto
|   |   |
|   |   ├── main.css             # Arquivo principal de estilização
|   |   ├── main.jsx             # Arquivo principal da estrutura HTML   
│   │   
│   └── package.json             # Dependências do frontend
|
├── README.md                    # Documentação do projeto e instruções

```

## Configuração do ambiente de desenvolvimento

### Requisitos

- Git: Controle de versão
- npm: Gerenciador de pacotes para Node.js
- Editor de Código: Visual Studio Code

## Iniciando o ambiente de desenvolvimento
1º - Com a pasta do projeto aberta no VsCode, acesse a pasta frontend através do terminal:
cd frontend

2º - Dentro da pasta frontend digite o seguinte comando:
npm run dev

## Fazendo Build do projeto para deploy
1º - Com a pasta do projeto aberta no VsCode, acesse a pasta frontend através do terminal:
cd frontend

2º - Dentro da pasta frontend digite o seguinte comando:
npm run build

3º - Será criada a pasta dist dentro do diretório selecionado e essa deve ser a pasta utilizada em caso de deploy manual

## Observações

### As medidas de todo o projeto estão padronizadas em REM
### Toda a responsividade do projeto foi feita dentro do arquivo main.css
