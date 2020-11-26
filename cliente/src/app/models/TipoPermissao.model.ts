export class TipoPermissao{

    private _id_tipopermissao: number;
   
    private _tipo: string;

    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }

    public get id_tipopermissao(): number {
        return this._id_tipopermissao;
    }
    public set id_tipopermissao(value: number) {
        this._id_tipopermissao = value;
    }
    
}