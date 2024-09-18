describe("Test Static", () => {
  class Configuration {
    static AUTHOR: string = "M Bimo Bayu Bagaskara";
    static TITLE: string = "Belajar TypeScript OOP";
    static VERSION: string = "1.0.0";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total: number = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
  }
  it("should support static properties in typescript", () => {
    expect(Configuration.AUTHOR).toBe("M Bimo Bayu Bagaskara");
    expect(Configuration.TITLE).toBe("Belajar TypeScript OOP");
    expect(Configuration.VERSION).toBe("1.0.0");
  });
  it("should support static method in typescript", () => {
    expect(MathUtil.sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
