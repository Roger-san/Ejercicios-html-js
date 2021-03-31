describe("maxNumber", () => {
  it("retorna 2 dado 1 y 2", () => {
    expect(maxNumber(1, 2)).toEqual(2);
  });

  it("retorna 9 dado 9 y 3", () => {
    expect(maxNumber(9, 3)).toEqual(9);
  });

  it("retorna 100000 dado 100000 y 99999", () => {
    expect(maxNumber(100000, 99999)).toEqual(100000);
  });
});

describe("sign", () => {
  it("retorna - dado 4*3*-2", () => {
    expect(sign(4, 3, -2)).toEqual("-");
  });
  it("retorna + dado -4*-3*4", () => {
    expect(sign(-4, -3, 4)).toEqual("+");
  });
});

// describe("orderArray", () => {
//     it("retorna [1, 2] dado [2, 1]", () => {
//           expect(orderArray([1, 2])).toEqual([2, 1]);
//     });
//     it("retorna [2,3] dado [3,2]", () => {
//         expect(orderArray([2, 3])).toEqual([3, 2]);
//     });
//     it("retorna [1,2,3] dado [3,2,1]", () => {
//           expect(orderArray([2, 3, 1])).toEqual([3, 2, 1]);
//     });
// }    );

describe("bigNumber", () => {
  it("    retorna el mayor numero del array", () => {
    expect(bigNumber([6, 3])).toEqual(6);
    expect(bigNumber([7, 8, 3, 22, 15])).toEqual(22);
    expect(bigNumber([1, -50, -1])).toEqual(1);
  });
});

// describe("parimpar", () => {
//   it("devuelve un array que vaya de 0 a 15, diciendo par o impar", () => {
//     expect(parimpar()).toEqual([
//       { value: 0, type: "even" },
//       { value: 1, type: "odd" },
//       { value: 2, type: "even" },
//       { value: 3, type: "odd" },
//       { value: 4, type: "even" },
//       { value: 5, type: "odd" },
//       { value: 6, type: "even" },
//       { value: 7, type: "odd" },
//       { value: 8, type: "even" },
//       { value: 9, type: "odd" },
//       { value: 10, type: "even" },
//       { value: 11, type: "odd" },
//       { value: 12, type: "even" },
//       { value: 13, type: "odd" },
//       { value: 14, type: "even" },
//       { value: 15, type: "odd" },
//     ]);
//   });
// });
describe("mediaStudent", () => {
  it("retorno el grado de cada estudiante, segun sus notas", () => {
    expect(mediaStudent("david", 80)).toEqual("B");
    expect(mediaStudent("mario", 77)).toEqual("C");
    expect(mediaStudent("ana", 88)).toEqual("B");
    expect(mediaStudent("erick", 95)).toEqual("A");
    expect(mediaStudent("silvia", 68)).toEqual("D");
  });
});

describe("retorna 'Fizz' 'Buzz' o 'FizzBuzz' o el numero segun sea multiplo de 3 y 5", () => {
  it("retorna 'Fizz' al pasar por el num 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });
  it("retorna 'Buzz' al pasar 12", () => {
    expect(fizzBuzz(12)).toEqual("Fizz");
  });
  it("retorna 'Fizz' al pasar 10", () => {
    expect(fizzBuzz(10)).toEqual("Buzz");
  });
  it("retorna 'Fizz' al pasar 10", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });
  it("retorna 2 al pasar 2", () => {
    expect(fizzBuzz(2)).toEqual(2);
  });
  it("retorna 4 al pasar 4", () => {
    expect(fizzBuzz()).toEqual(4);
  });
});

// const spy = spyOn(console, "log");
// fizzBuzz(3);

// expect(spy).toHaveBeenCalledWith("Fizz");
