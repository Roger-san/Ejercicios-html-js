describe("golfCode", () => {
  it("retorna 'Hole-in-one' si das 1", () => {
    expect(golfCode(1, 1)).toEqual("Hole-in-one");
  });
  it("retorna 'Eagle' si das par -2", () => {
    expect(golfCode(5, 3)).toEqual("Eagle");
  });
  it("retorna 'Birdie' si das par -1", () => {
    expect(golfCode(5, 4)).toEqual("Birdie");
  });
  it("retorna 'par' si das 'par' ", () => {
    expect(golfCode(3, 3)).toEqual("par");
  });
  it("retorna 'Bogey' si das par + 1 ", () => {
    expect(golfCode(3, 4)).toEqual("Bogey");
  });
  it("retorna 'Double Bogey' si das par + 2 ", () => {
    expect(golfCode(3, 5)).toEqual("Double Bogey");
  });
  it("retorna 'Go Home!' si das par + 3 ", () => {
    expect(golfCode(3, 9)).toEqual("Go Home!");
    expect(golfCode(3, 6)).toEqual("Go Home!");
  });
});
