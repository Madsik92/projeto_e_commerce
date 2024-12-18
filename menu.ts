import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";


export function main() {

    let opcao, id, tipo, preco: number;
    let nome, capa, midea: string;

    const tipoProduto = ['Ebook' , 'LivroFisico'];



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

                KeyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong,
                    "\nListar Produto pelo ID \n", colors.reset);

                KeyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong,
                    "\nCadastrar Produto\n", colors.reset);

                KeyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "\nAtualizar Produto\n", colors.reset);

                KeyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\nDeletar Produto\n", colors.reset);

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