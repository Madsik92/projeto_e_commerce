import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ProdutoController } from "./src/controller/ProdutoController";
import { LivroFisico } from "./src/model/LivroFisico";
import { Ebook } from "./src/model/Ebook";


export function main() {

    let produto: ProdutoController = new ProdutoController();

    let opcao, id, tipo, preco: number;
    let nome, capa, midia: string;

    const tipoProduto = ['Livro Fisico', 'E-book'];

    while (true) {
        menu()
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.whitestrong);
            console.log("\nPergaminho Flutuante");
            console.log("\nLevamos a magia para sua estante!");
            about();
            console.log(colors.reset);
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\nListar todos os Produtos\n", colors.reset);

                produto.listarTodos();

                KeyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong,
                    "\nListar Produto pelo ID \n", colors.reset);

                console.log("Digite o numero do Id: ");
                id = readlinesync.questionInt("");
                produto.procurarPorId(id);

                KeyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong,
                    "\nCadastrar Produto\n", colors.reset);

                console.log("\nNome do Produto: ");
                nome = readlinesync.question('');

                console.log("\nTipo do Produto: ");
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                console.log("\nPreco do Produto (R$): ");
                preco = readlinesync.questionFloat('');


                switch (tipo) {
                    case 1:
                        const tipoCapa = ['Capa Dura', 'Capa Comum'];
                        const escolhaCapa = readlinesync.keyInSelect(tipoCapa, "Escolha o tipo de capa: ", { cancel: false }) + 1;
                        capa = tipoCapa[escolhaCapa];

                        produto.cadastrarProduto(new LivroFisico(produto.gerarId(), nome, tipo, preco, capa));

                        break;
                    case 2:
                        const tipoMidea = ['PDF', 'EPUB', 'MOBI', 'Audio Book'];
                        const escolhaMidea = readlinesync.keyInSelect(tipoMidea, "Digite o tipo de Midea do E-book: ", { cancel: false }); + 1;
                        midia = tipoMidea[escolhaMidea];

                        produto.cadastrarProduto(new Ebook(produto.gerarId(), nome, tipo, preco, midia));

                        break;

                    default:
                        console.log("Opcao invalida!");
                        break;
                }
                KeyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "\nAtualizar Produto\n", colors.reset);

                console.log("Digite o Id do Produto: ");
                id = readlinesync.questionInt("");

                let produtoEncontrado = produto.buscarNoArray(id);

                if (produtoEncontrado != null) {

                    console.log("\nNome do Produto: ");
                    nome = readlinesync.question('');

                    tipo = produto.tipo;

                    console.log("\nPreco do Produto (R$): ");
                    preco = readlinesync.questionFloat('');


                    switch (tipo) {
                        case 1:
                            const tipoCapa = ['Capa Dura', 'Capa Comum'];
                            const escolhaCapa = readlinesync.keyInSelect(tipoCapa, "Escolha o tipo de capa: ", { cancel: false }) + 1;
                            const capa = tipoCapa[escolhaCapa];

                            produto.atualizar(new LivroFisico(produto.gerarId(), nome, tipo, preco, capa));

                            break;
                        case 2:
                            const tipoMidea = ['PDF', 'EPUB', 'MOBI', 'Audio Book'];
                            const escolhaMidea = readlinesync.keyInSelect(tipoMidea, "Digite o tipo de Midea do E-book: ", { cancel: false }) + 1;
                            const midia = tipoMidea[escolhaMidea];

                            produto.atualizar(new Ebook(produto.gerarId(), nome, tipo, preco, midia));

                            break;

                        default:
                            console.log("Opcao invalida!");
                            break;
                    }
                } else {
                    console.log(colors.fg.red, "Produto numero: " + id + "nao foi encontrado!", colors.reset)
                }


                KeyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\nDeletar Produto\n", colors.reset);

                    console.log("Digite o Id do Produto: ");
                    id = readlinesync.questionInt("");
                    produto.deletar(id);

                KeyPress();
                break;

            default:
                console.log(colors.fg.red,
                    "\nOpção Inválida!\n", colors.reset);

                break;
        }

    }

}

function menu(): void {

    console.log(colors.fg.cyanstrong);
    console.log("===================================");
    console.log("       PERGAMINHO FLUTUANTE        ");
    console.log("-----------------------------------");
    console.log("                                   ");
    console.log(" 1 - Listar todos os Produtos      ");
    console.log(" 2 - Listar Produto pelo ID        ");
    console.log(" 3 - Cadastrar Produto             ");
    console.log(" 4 - Atualizar Produto             ");
    console.log(" 5 - Deletar Produto               ");
    console.log(" 0 - Sair                          ");
    console.log("                                   ");
    console.log("===================================");
    console.log("\n Entre com a opcao desejada:     ");
    console.log(colors.reset);
}

function KeyPress(): void {
    console.log(colors.fg.whitestrong, "\nPressione enter para continuar...", colors.reset);
    readlinesync.prompt();
}

function about(): void {
    console.log("\n===================================")
    console.log("Desenvolvido por: ")
    console.log("Jessica Rosario")
    console.log("jessica.rosario4@gmail.com")
    console.log("github.com/Madsik92")
    console.log("===================================\n")
}

main();