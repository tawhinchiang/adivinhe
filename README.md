# Adivinhe

Jogo simples de adivinhação de palavras desenvolvido com React, TypeScript e Vite.

O jogador recebe uma dica, tenta descobrir a palavra letra por letra e acompanha as tentativas já usadas durante a rodada.

## Visão geral

O projeto renderiza uma única tela com:

- contador de tentativas;
- botão para reiniciar a partida;
- dica da palavra atual;
- espaços das letras da palavra;
- campo para informar um palpite;
- lista de letras já utilizadas, destacando acertos e erros.

## Tecnologias

- React 19
- TypeScript
- Vite
- CSS Modules

## Regras do jogo

1. Ao iniciar a aplicação, uma palavra é sorteada da lista em `src/utils/words.ts`.
2. O jogador informa uma letra por vez.
3. Letras repetidas não são aceitas.
4. Quando a letra existe na palavra, todas as ocorrências contam como acerto.
5. O total de tentativas disponíveis é o tamanho da palavra + `5`.
6. Ao completar a palavra, o jogo exibe uma mensagem de vitória e reinicia.
7. Ao atingir o limite de tentativas, o jogo informa a resposta correta e reinicia.

## Pontuação e estado

- A pontuação é calculada pela quantidade de letras acertadas.
- O histórico de letras utilizadas fica armazenado em memória durante a rodada.
- Reiniciar a partida limpa a letra digitada, a pontuação e o histórico de tentativas.

## Estrutura do projeto

```text
.
├── public/
├── src/
│   ├── assets/              # Imagens e ícones da interface
│   ├── components/
│   │   ├── Button/
│   │   ├── Header/
│   │   ├── Input/
│   │   ├── Letter/
│   │   ├── LettersUsed/
│   │   └── Tip/
│   ├── utils/
│   │   └── words.ts         # Base local de palavras e dicas
│   ├── App.tsx              # Fluxo principal do jogo
│   ├── app.module.css
│   ├── global.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Componentes principais

- `Header`: exibe a logo, o contador de tentativas e a ação de reinício.
- `Tip`: mostra a dica relacionada à palavra sorteada.
- `Letter`: renderiza cada letra da palavra e também os itens da lista de letras usadas.
- `Input`: campo de texto para digitar uma letra.
- `Button`: confirma o palpite.
- `LettersUsed`: lista as letras já tentadas, separando visualmente acertos e erros.

## Como executar o projeto

### Pré-requisitos

- Node.js 20+ recomendado
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Depois, abra a URL exibida pelo Vite no navegador.

### Gerar build de produção

```bash
npm run build
```

### Visualizar build localmente

```bash
npm run preview
```

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: compila o TypeScript e gera a build com o Vite.
- `npm run preview`: sobe uma prévia local da build gerada.

## Onde alterar palavras e dicas

As palavras disponíveis ficam em `src/utils/words.ts`.

Cada item segue a estrutura:

```ts
{
  id: number,
  word: string,
  tip: string
}
```

Para adicionar novas rodadas, basta incluir novos objetos no array `WORDS`.

## Comportamento atual

- O projeto não consome API nem usa persistência externa.
- Todo o estado do jogo fica no componente `App`.
- As mensagens de vitória, derrota e validação usam `alert` e `confirm` do navegador.

## Melhorias possíveis

- extrair a lógica do jogo para hooks ou serviços;
- substituir `alert`/`confirm` por componentes visuais;
- adicionar testes unitários e de interface;
- permitir categorias, níveis de dificuldade e placar persistente;
- normalizar textos e codificação para evitar problemas de acentuação.

## Licença

Este projeto não possui licença definida no repositório até o momento.
