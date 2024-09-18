describe("Test Parameter Properties", () => {
  class Person {
    constructor(public name: string) {}
  }
  it("Should support parameter properties in typescript", () => {
    const bimo = new Person("Bimo");
    expect(bimo.name).toBe("Bimo");
  });
});
