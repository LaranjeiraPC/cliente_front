export class Usuario{

    private _id: number;
	private _usuario: string;
    private _senha: string;
    private _autenticado: boolean = false;
    
    public get autenticado(): boolean {
        return this._autenticado;
    }
    public set autenticado(value: boolean) {
        this._autenticado = value;
    }
    
    public get senha(): string {
        return this._senha;
    }
    public set senha(value: string) {
        this._senha = value;
    }

    public get usuario(): string {
        return this._usuario;
    }
    public set usuario(value: string) {
        this._usuario = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

}