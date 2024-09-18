describe("Test Abstract", () => {
  abstract class Customer {
    id: string;
    abstract name: string;
    constructor(id: string) {
      this.id = id;
    }

    abstract sayHello(): string;
  }

  class RegularCustomer extends Customer {
    name: string;
    constructor(id: string, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(): string {
      return `Hello reguler ${this.name}`;
    }
  }
  it("should support abstract class in typescript", () => {
    const bimo = new RegularCustomer("187221049", "M Bimo Bayu Bagaskara");

    expect(bimo.sayHello()).toBe("Hello reguler M Bimo Bayu Bagaskara");
  });
});
