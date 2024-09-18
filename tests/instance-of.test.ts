describe("Test Instance Of", () => {
  class Person {
    constructor(public name: string) {}
  }

  class Manager {}
  it("Should support instance of in typescript", () => {
    const bimo = new Person("Bimo");
    const manager = new Manager();

    expect(bimo instanceof Person).toBeTruthy();
    expect(bimo instanceof Manager).toBeFalsy();
    expect(manager instanceof Person).toBeFalsy();
    expect(manager instanceof Manager).toBeTruthy();
  });
});
