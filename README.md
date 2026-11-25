# Senai-Cardapio-React

Cardápio Digital — React

## Descrição

Aplicação web de cardápio digital desenvolvida com **React 18**, **TypeScript** e **Vite**, conforme proposto na **Aula 08 - Atividade 01** da disciplina Frameworks Front-end.

O projeto demonstra todos os conceitos de React estudados na aula: **JSX**, **componentes funcionais**, **props**, **Virtual DOM**, **listas e keys**, e **renderização condicional**. Além disso, utiliza `useState` para gerenciar o estado do carrinho de compras e o filtro de categorias.

## Tecnologias utilizadas

- **React 18** — biblioteca JavaScript para interfaces de usuário
- **TypeScript** — tipagem estática para JavaScript
- **Vite** — ferramenta de build e servidor de desenvolvimento rápido
- **HTML5 / CSS3** — estrutura e estilização

## Estrutura do projeto

```
cardapio-react/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx        — ponto de entrada do React
│   ├── App.tsx         — componente principal com lógica de filtros e carrinho
│   └── index.css       — estilos globais
```

## Como o protótipo funciona

O cardápio digital permite ao usuário navegar por pratos organizados em categorias e adicioná-los a um carrinho de compras.

- **Cabeçalho**: exibe o título do cardápio e uma descrição.
- **Filtros de categoria**: botões para filtrar pratos por categoria (Todas, Prato Principal, Salada, Lanche, Pizza, Sobremesa). O filtro ativo é destacado visualmente.
- **Grade de pratos**: cada prato é renderizado por um componente `PratoCard`, que recebe os dados do prato via **props** (`id`, `nome`, `categoria`, `preco`, `descricao`). Os pratos são renderizados usando `map()` com a propriedade `key` vinculada ao `id`.
- **Renderização condicional**: quando não há pratos para a categoria selecionada, é exibida a mensagem "Nenhum prato encontrado." em vez da grade.
- **Carrinho**: fixo no canto superior direito, exibe os pratos adicionados com opção de remover e o total da compra.

## Conceitos aplicados (Aula 08 - Atividade 01)

- [x] **JSX**: sintaxe para escrever estruturas semelhantes a HTML dentro do JavaScript
- [x] **Componentes funcionais**: `App`, `CategoriaFiltro`, `PratoCard`, `ItemCarrinho`
- [x] **Props**: passagem de dados entre componentes pai e filho
- [x] **Virtual DOM**: React gerencia atualizações eficientes da interface
- [x] **Listas e Keys**: `map()` para renderizar pratos e `key={prato.id}` para identidade dos elementos
- [x] **Renderização condicional**: exibição de pratos ou mensagem de vazio conforme o filtro
- [x] **useState**: gerenciamento de estado do filtro e do carrinho

## Como executar

1. Instale as dependencias:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse a URL gerada pelo Vite (por default: `http://localhost:5173`)

Para build de producao:
```bash
npm run build
```

## Repositorio principal

[senai-framework-frontend](https://github.com/paulopoppes-hash/senai-framework-frontend)
