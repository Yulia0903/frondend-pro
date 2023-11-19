function Student(firstName, secondName, birthYear) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.birthYear = birthYear;
  this.grades = [];
  this.attendance = new Array(25).fill(undefined);

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };

  this.calculateAverageGrade = function () {
    if (this.grades.length === 0) {
      return 0;
    }

    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  };

  this.estimate = function (grade) {
    this.grades.push(grade);
  };

  this.present = function () {
    const index = this.attendance.findIndex((value) => value === undefined);
    if (index !== -1) {
      this.attendance[index] = true;
    }
  };

  this.absent = function () {
    const index = this.attendance.findIndex((value) => value === undefined);
    if (index !== -1) {
      this.attendance[index] = false;
    }
  };

  this.summary = function () {
    const averageGrade = this.calculateAverageGrade();
    const attendanceRatio =
      this.attendance.filter((value) => value === true).length /
      this.attendance.length;

    if (averageGrade > 90 && attendanceRatio >= 0.9) {
      return "Молодець!";
    } else if (averageGrade > 70 || attendanceRatio > 0.5) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}

const student1 = new Student("Yulia", "Erescshenko", 1991);
const student2 = new Student("John", "Doe", 1998);

student1.estimate(80);
student1.present();
student1.present();
student1.absent();

student2.estimate(70);
student2.present();
student2.present();
student2.present();

console.log("Student 1 Summary:", student1.summary());
console.log("Student 2 Summary:", student2.summary());
