describe("Test Visibillity", () => {
  class Counter {
    private counter: number = 0;

    public increment() {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }
  it("should support visibillity in typescript", () => {
    const counter = new Counter();

    expect(counter.getCounter()).toBe(0);

    counter.increment();
    counter.increment();
    counter.increment();
    expect(counter.getCounter()).toBe(3);
    console.info(counter.getCounter());
  });
});
