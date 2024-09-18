describe("Test Class", () => {
  it("should can create class", () => {
    class Customer {
      readonly id: string;
      name: string = "";
      age?: number;

      constructor(id: string, name: string, age?: number) {
        this.id = id;
        this.name = name;
        if (age) {
          this.age = age;
        }
        console.info("Create new Customer");
      }

      sayHello(): string {
        return `Hello ${this.name}`;
      }
    }
    class Product {}

    const customer: Customer = new Customer(
      "187221049",
      "M Bimo Bayu Bagaskara",
      21
    );
    const product = new Product();

    expect(customer.name).toBe("M Bimo Bayu Bagaskara");

    expect(customer.sayHello()).toBe("Hello M Bimo Bayu Bagaskara");
  });
});
