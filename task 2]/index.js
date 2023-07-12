class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, departament) {
    super(name, salary);
    this.departament = departament;
  }

  getDetailis() {
    console.log(`
    Имя => ${this.name}  
    Зарплата => ${this.salary}
    Департамент  => ${this.departament}`);
  }
}

class Developer extends Employee {
  constructor(name, salary, programmingLanguage) {
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }

  getDetailis() {
    console.log(`
    Имя => ${this.name}  
    Зарплата => ${this.salary}
    Язык пргограммирования  => ${this.programmingLanguage}`);
  }
}

let manager = new Manager("Любовь", 1500, "Разработчик");
let developer = new Developer("Михаил", 1800, "Python");

manager.getDetailis();
developer.getDetailis();