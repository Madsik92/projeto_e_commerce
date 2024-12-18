import { Produto } from "./Produto";

export class Ebook extends Produto {

    private _midea: string;

    constructor(id: number, nome: string, tipo: number, preco: number, midea: string) {
        super(id, nome, tipo, preco)
        this._midea = midea;
    }

    public get midea(): string {
        return this._midea;
    }

    public set midea(value: string) {
        this._midea = value;
    }


    public visualizar(): void {
        super.visualizar();
        console.log("Formato de Midea: " + this._midea);
    }
}