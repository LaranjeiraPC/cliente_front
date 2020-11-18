export class Usuario{

    private _id: number;
	private _usuario: string;
    private _autenticado: boolean = false;
    private _status: string;
    private _message: string;

    public get autenticado(): boolean {
        return this._autenticado;
    }
    public set autenticado(value: boolean) {
        this._autenticado = value;
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

    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }

    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }

}