// vamos definir as props (propriedades) do componente Produto
interface ProdutoProps {
    nome: string,
    descricao: string,
    qtde: number,
    preco: number
}
export function Produto(prod: ProdutoProps) {
    return (
        <div className="bg-zinc-400 w-30 h-10 text-white rounded m-2 flex items-center justify-center">
            Nome: {prod.nome}
            Descrição: {prod.descricao}
            Qtde: {prod.qtde}
            Preço: {prod.preco}
        </div>
    )
}