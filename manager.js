const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager) { // manager cannot be set to null, because manager value needs to be updated everytime a Manager instance is invoked, not be foreced to null
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        const bonus = (this.salary + this._totalSubSalary()) * multiplier;
        // console.log(this._totalSubSalary());
        return bonus;
    }
    _totalSubSalary() {
        // console.log(this.employees);
        let sum = 0;
        for (const employee of this.employees) {
            // console.log(employee);
            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary()
            } else {
                sum += employee.salary
            }
        }
        return sum;
    }

    


}




const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500 = 5000 + 4500 + 13000
console.log(leo.calculateBonus(0.05)); // => 17500 = 4500 + 13000
console.log(raph.calculateBonus(0.05)); // => 13000
// console.log(leo);

module.exports = Manager;
