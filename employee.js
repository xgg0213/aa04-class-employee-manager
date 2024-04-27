class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
        if (manager) {
            manager.addEmployee(this);
        };
    }
}

module.exports = Employee;

// const leo = new Employee('Leonardo', 90000, 'Ninja', 'plinter');
// console.log(leo)
