import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {
    [x: string]: any;

    private listaProdutos: Array<Produto> = new Array<Produto>();

    public id: number = 0;

    listarTodos(): void {
        this.listaProdutos.forEach(produto => produto.visualizar());
    }

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null){
            buscaProduto.visualizar();
        } else
            console.log(colors.fg.red, "\nO Produto numero: " + id + "nao foi encontrado!", colors.reset);

    }

    cadastrarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nO Produto foi cadastrado com sucesso!")

    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("O Produto numero: " + produto.id + "foi atualizada com sucesso!")
        } else 
            console.log(colors.fg.red, "O Produto numero: " + produto.id + "nao foi encontrado!", colors.reset)

    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("O Produto numero: " + id + "foi apagadacom sucesso!")
        } else 
            console.log(colors.fg.red, "O Produto numero: " + id + "nao foi encontrado!", colors.reset)

    }

    public gerarId(): number {
        return ++ this.id;
    }

    public buscarNoArray(id: number): Produto | null {

        for (let produto of this.listaProdutos) {
        if (produto.id === id)
            return produto;
        }
    return null;
    }
    
}