describe("whileAdd", () => {
  it("deve de tener una longitud de 6", () => {
    const subject = whileAdd([]);
    expect(subject).toHaveSize(6);
  });
    it("deve de contener numeros del 0 al 5", () => {
      const subject = whileAdd([]);
      expect(subject).toEqual([5, 4, 3, 2, 1, 0]);
    });
});


