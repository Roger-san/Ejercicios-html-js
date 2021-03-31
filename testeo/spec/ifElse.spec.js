describe("testSize", () => {
  it("retorna Tiny si el tamaño es menor que 5", () => {
    expect(testSize(3)).toEqual("Tiny");
  });

  it("retorna Small si el tamaño es menor que 10", () => {
    expect(testSize(9)).toEqual("Small");
  });

  it("retorna Medium si el tamaño es menor que 15", () => {
    expect(testSize(14)).toEqual("Medium");
  });

  it("retorna Large si el tamaño es menor que 20", () => {
    expect(testSize(19)).toEqual("Large");
  });

  it("retorna Huge si el tamaño es mayor o igual a 20", () => {
    expect(testSize(20)).toEqual("Huge");
    expect(testSize(30)).toEqual("Huge");
  });
});
