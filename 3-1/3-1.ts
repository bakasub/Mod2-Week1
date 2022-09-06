class Staff {
    private name: string;
    private email: string;
    private age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}


let staff = new Staff('Nhan vien 1', 'staff@gmail.com', 20);

let nameStaff = staff.getName();


console.log(nameStaff);


staff.setName('Nhan vien 2');


let currentNameStaff: string = staff.getName();


console.log(currentNameStaff) // Nhan vien 2
