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

describe("chainToSwitch", () => {
  it("retorna 'marley' en caso de 'bob'", () => {
    expect(chainToSwitch("bob")).toEqual("marley");
  });
  it("retorna 'anwser' en caso de 42", () => {
    expect(chainToSwitch("anwser")).toEqual(42);
  });
  it("retorna 'There is no #1' en caso de 1", () => {
    expect(chainToSwitch(1)).toEqual("There is no #1");
  });
  it("retorna 'Missed me by this much!' en caso de 99", () => {
    expect(chainToSwitch(99)).toEqual("Missed me by this much");
  });
});
