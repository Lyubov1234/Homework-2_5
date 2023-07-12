class person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student extends person {
  constructor(name, age, gender, major) {
    super(name, age, gender);
    this.major = major;
  }

  getDetailis() {
    console.log(`
    Имя => ${this.name}  
    Возраст => ${this.age}
    Пол  => ${this.gender}
    Специализация=> ${this.major}`);
  }
}

let student = new Student("Любовь", "27", "Женский", "Frontend");

student.getDetailis();
