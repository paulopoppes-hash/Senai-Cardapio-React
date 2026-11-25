import React from 'react'

interface Prato {
  id: number
  nome: string
  categoria: string
  preco: number
  descricao: string
}

interface CategoriaFiltroProps {
  categorias: string[]
  filtroAtual: string
  onSelecionarCategoria: (categoria: string) => void
}

interface PratoCardProps {
  prato: Prato
  onAdicionar: (prato: Prato) => void
}

interface ItemCarrinhoProps {
  prato: Prato
  indice: number
  onRemover: (indice: number) => void
}

function CategoriaFiltro({ categorias, filtroAtual, onSelecionarCategoria }: CategoriaFiltroProps) {
  return (
    <div className="filtros">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          className={`filtro ${filtroAtual === categoria ? 'ativo' : ''}`}
          onClick={() => onSelecionarCategoria(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  )
}

function PratoCard({ prato, onAdicionar }: PratoCardProps) {
  return (
    <div className="item">
      <img
        src={`https://via.placeholder.com/250x160?text=${encodeURIComponent(prato.nome)}`}
        alt={prato.nome}
        className="item-img"
      />
      <h3 className="item-titulo">{prato.nome}</h3>
      <p className="item-desc">{prato.descricao}</p>
      <span className="item-preco">R$ {prato.preco.toFixed(2)}</span>
      <button className="btn-adicionar" onClick={() => onAdicionar(prato)}>
        Adicionar
      </button>
    </div>
  )
}

function ItemCarrinho({ prato, indice, onRemover }: ItemCarrinhoProps) {
  return (
    <li className="item-carrinho">
      {prato.nome} - R$ {prato.preco.toFixed(2)}
      <button
        className="btn-remover"
        onClick={() => onRemover(indice)}
      >
        Remover
      </button>
    </li>
  )
}

export default function App() {
  const pratos: Prato[] = [
    { id: 1, nome: 'Feijoada Completa', categoria: 'Prato Principal', preco: 45.90, descricao: 'Feijão preto com carnes suínas e acompanhamentos.' },
    { id: 2, nome: 'Moqueca de Peixe', categoria: 'Prato Principal', preco: 52.90, descricao: 'Peixe cozido em leite de coco e dendê.' },
    { id: 3, nome: 'Salada Caesar', categoria: 'Salada', preco: 28.90, descricao: 'Alface, croutons, parmesão e molho caesar.' },
    { id: 4, nome: 'Hambúrguer Artesanal', categoria: 'Lanche', preco: 34.90, descricao: 'Carne 180g, queijo, alface e molho especial.' },
    { id: 5, nome: 'Pizza Margherita', categoria: 'Pizza', preco: 42.90, descricao: 'Molho de tomate, mussarela e manjericão.' },
    { id: 6, nome: 'Sobremesa de Pudim', categoria: 'Sobremesa', preco: 15.90, descricao: 'Pudim de leite condensado com calda.' },
  ]

  const categorias = ['Todas', ...new Set(pratos.map((p) => p.categoria))]
  const [filtro, setFiltro] = React.useState<string>('Todas')
  const [carrinho, setCarrinho] = React.useState<Prato[]>([])

  const filtrados = pratos.filter((p) => filtro === 'Todas' || p.categoria === filtro)
  const total = carrinho.reduce((soma, p) => soma + p.preco, 0)

  function adicionarAoCarrinho(prato: Prato) {
    setCarrinho([...carrinho, prato])
  }

  function removerDoCarrinho(indice: number) {
    setCarrinho(carrinho.filter((_, i) => i !== indice))
  }

  return (
    <div className="container">
      <div className="cabecalho">
        <h1>Cardápio Digital</h1>
        <p className="subtitulo">Escolha seus pratos favoritos.</p>
      </div>

      <CategoriaFiltro
        categorias={categorias}
        filtroAtual={filtro}
        onSelecionarCategoria={setFiltro}
      />

      <div className="cardapio">
        {filtrados.length > 0 ? (
          filtrados.map((prato) => (
            <PratoCard key={prato.id} prato={prato} onAdicionar={adicionarAoCarrinho} />
          ))
        ) : (
          <div className="vazio">Nenhum prato encontrado.</div>
        )}
      </div>

      <div className="carrinho">
        <h3>Carrinho</h3>
        <ul id="itens-carrinho">
          {carrinho.map((prato, indice) => (
            <ItemCarrinho
              key={indice}
              prato={prato}
              indice={indice}
              onRemover={removerDoCarrinho}
            />
          ))}
        </ul>
        <div className="total">Total: R$ {total.toFixed(2)}</div>
      </div>
    </div>
  )
}
