describe("Test Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }
  class Manager extends Employee {}
  class VicePresident extends Employee {}

  function sayHello(employee: Employee): string {
    return `Hello, ${employee.name}`;
  }
  function sayHelloCast(employee: Employee): string {
    if (employee instanceof VicePresident) {
      return `Hello VicePresident ${employee.name}`;
    } else if (employee instanceof Manager) {
      return `Hello Manager ${employee.name}`;
    } else {
      return `Hello Employee ${employee.name}`;
    }
  }
  it("should support polymorphism in typescript", () => {
    let employee: Employee = new Employee("Bimo");
    console.info(employee);
    employee = new Manager("Biyura");
    console.info(employee);
    employee = new VicePresident("Biyura");
    console.info(employee);
  });

  it("should support method parameter polymorphism in typescript", () => {
    let employee: Employee = new Employee("Bimo");
    console.info(employee);
    expect(sayHelloCast(employee)).toBe("Hello Employee Bimo");
    employee = new Manager("Biyura");
    expect(sayHelloCast(employee)).toBe("Hello Manager Biyura");
    console.info(employee);
    employee = new VicePresident("Biyura");
    expect(sayHelloCast(employee)).toBe("Hello VicePresident Biyura");
    console.info(employee);
  });
});
