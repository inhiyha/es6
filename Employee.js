class Employee {
    constructor(name, salary, designation) {
        this._name = name;
        this._salary = salary;
        this._designation = designation;
    }
    get myName() {
        return this._name.toLowerCase();
    }
    set myName(name) {
        this._name = name;
    }

    static leave() {
        return "No leave";
    }

    toString() {
        return `${this.myName},${this._salary}`;
    }

}
var emp1 = new Employee('Inhiyha', 1000, 'IT');
var emp2 = new Employee('Inhiyha', 5000, 'IT');
console.log(`${emp1.myName}, ${emp1._salary}`);
console.log(emp1.toString());
var sum = (emp1, emp2) => emp1._salary + emp2._salary;
console.log(sum(emp1, emp2));
var empMap = [emp1, emp2].map(emp => emp._salary);
console.log(empMap);

var str = "nhiyha";
for (value of str) {
    console.log(value);
}

var constructArr = function (a, b, c) {
    var arr = [];
    arr.push(a);
    arr.unshift(b);
    arr.push(c);
    console.log(arr);
}

constructArr(1, 2, 3, 4);
var temp = [5,4];
constructArr(1, 2, ...temp);
console.log(Employee.leave());

const key = "secret";
var a = 2;
function checking() {
    a = 1;
    console.log(a);
}
checking();
