import { Produto } from "./Produto";

export class LivroFisico extends Produto {

    private _capa: string;

    constructor(id: number, nome: string, tipo: number, preco: number, capa: string) {
		super(id, nome, tipo, preco)
		this._capa = capa;
	}

	public get capa(): string {
		return this._capa;
	}

	public set capa(value: string) {
		this._capa = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log("Capa do Livro: " + this._capa);
    }
}