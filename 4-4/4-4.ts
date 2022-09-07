class User {
    private _name: string;
    private _email: string;
    private _role: number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }

    getInfo() {

    }
    isAdmin(){
        if (this.role == 1){
            console.log('admin')
        } else if (this.role == 2){
            console.log('user')
        }
    }
}
