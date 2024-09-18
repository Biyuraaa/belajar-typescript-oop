describe("Test Inheritance", () => {
  class Employee {
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
  }

  class Manager extends Employee {}
  class VicePresident extends Employee {}

  it("should support getter setter in typescript", () => {
    const category = new Employee("187221049");

    expect(category.name).toBe("empty");

    category.name = "Makanan";
    expect(category.name).toBe("Makanan");
  });
});
