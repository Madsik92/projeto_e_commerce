import { Produto } from "./Produto";

export class Ebook extends Produto {

    private _midia: string;

    constructor(id: number, nome: string, tipo: number, preco: number, midia: string) {
        super(id, nome, tipo, preco)
        this._midia = midia;
    }

    public get midia(): string {
        return this._midia;
    }

    public set midia(value: string) {
        this._midia = value;
    }


    public visualizar(): void {
        super.visualizar();
        console.log("Formato de Mida: " + this._midia);
    }
}