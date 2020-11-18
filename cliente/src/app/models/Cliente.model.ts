export class Cliente {

    private _id: number;
    private _nome: string;
    private _idade: string;
   
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    
    public get idade(): string {
        return this._idade;
    }
    public set idade(value: string) {
        this._idade = value;
    }
    
}