enum Gender{
    Male,
    Female,
    Other,
}

class Employee {
    fullname: string;
    gender:Gender = Gender.Other;
    birthday?: Date;
    email: string;
}