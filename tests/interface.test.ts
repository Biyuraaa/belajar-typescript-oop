describe("Test Interface", () => {
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

  class Manager extends Employee {}
  class VicePresident extends Employee {}

  it("should support getter setter in typescript", () => {
    const employee = new Employee("187221049");

    expect(employee.name).toBe("empty");

    employee.name = "M Bimo Bayu Bagaskara";
    expect(employee.name).toBe("M Bimo Bayu Bagaskara");
    expect(employee.sayHello("Rizal")).toBe(
      "Hello Rizal, my name is M Bimo Bayu Bagaskara"
    );
  });
});
