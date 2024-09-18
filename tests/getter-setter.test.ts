describe("Test Getter Setter", () => {
  class Category {
    _name?: string;
    constructor(name?: string) {
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
  it("should support getter setter in typescript", () => {
    const category = new Category();

    expect(category.name).toBe("empty");

    category.name = "Makanan";
    expect(category.name).toBe("Makanan");
  });
});
