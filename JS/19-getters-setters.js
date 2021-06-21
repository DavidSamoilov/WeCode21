//Normal get or set. Nothing special here
const employee = {
    name: 'Shahar',
    salary: 3500,
    phones: [],
    getVat() {
        return this.salary * 0.17;
    },
    setPhone(p) {
        //Optional Validations
        this.phones.push(p);
    }
}

console.log(`Emp name: ${employee.name}.
Salary ${employee.salary}.
VAT: ${employee.getVat()} NIS`);

employee.setPhone('0545421210');
employee.setPhone('0509652320');

console.log(`Phones ${employee.phones}`);


//getter is a special method that 'looks' like a property to the user
//ES6 - 2015
const employee2 = {
    name: 'Shahar',
    salary: 3500,
    phones: [],
    get vat() {
        return this.salary * 0.17;
    },
    set phone(p) {
        //Optional Validations
        this.phones.push(p);
    },
    get phone() {
        return this.phones[this.phones.length - 1];
    }
}

console.log(`Emp2 name: ${employee2.name}.
Salary2 ${employee2.salary}.
VAT: ${employee2.vat} NIS`);

//setter
employee2.phone = '0545421210';
employee2.phone = '0509652320';

console.log(`Phones ${employee2.phones}`);

//getter
console.log(`Your updated phone is ${employee2.phone}`);