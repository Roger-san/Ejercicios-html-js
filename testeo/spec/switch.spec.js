describe("caseInSwitch", () => {
  it("retorna 'apple' dado 'a'", () => {
    expect(caseInSwitch("a")).toEqual("apple");
  });

  it("retorna 'bird' dado 'b'", () => {
    expect(caseInSwitch("b")).toEqual("bird");
  });

  it("retorna 'cat' dado 'c'", () => {
    expect(caseInSwitch("c")).toEqual("cat");
  });

  it("retorna 'stuff', dada cualquier otra cosa", () => {
    expect(caseInSwitch()).toEqual("stuff");
    expect(caseInSwitch(5)).toEqual("stuff");
  });
});
