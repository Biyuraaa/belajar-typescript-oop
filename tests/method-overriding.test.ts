describe("Test Method Overriding", () => {
  interface HasName {
    name: string;
  }

  interface CanSayHello {
    sayHello(name: string): string;
  }

  class Employee implements HasName, CanSayHello {
    id: string;
    _name?: string;

    constructor(id: string, name?: string) {
      this.id = id;
      this._name = name;
    }

    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "empty";
      }
    }

    set name(name: string) {
      if (name !== "") {
        this._name = name;
      }
    }

    sayHello(name: string): string {
      return `Hello ${name}, my name is ${this.name}`;
    }
  }

  class Manager extends Employee {
    department: string;

    constructor(id: string, name: string, department: string) {
      super(id, name);
      this.department = department;
    }

    sayHello(name: string): string {
      return `Hello ${name}, my name is ${this.name}, im a Manager`;
    }
  }
  class VicePresident extends Employee {}

  it("should support method overriding in typescript", () => {
    const employee = new Employee("187221049");

    expect(employee.name).toBe("empty");

    employee.name = "M Bimo Bayu Bagaskara";
    expect(employee.name).toBe("M Bimo Bayu Bagaskara");

    const manager = new Manager("187221049", "Biyuraaa", "IT");
    expect(manager.department).toBe("IT");
    expect(manager.sayHello("Rizal")).toBe(
      "Hello Rizal, my name is Biyuraaa, im a Manager"
    );
  });
});
