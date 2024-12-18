import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    listarTodos(): void;
    procurarPorId(id: number): void;       
    cadastrarProduto(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;

}