import * as math from "./math";

const app = {
  doAdd: (a: number, b: number) => {
    math.add(a, b);
  },
  doSubstract: (a: number, b: number) => {
    math.substract(a, b);
  },
  doMultiply: (a: number, b: number) => {
    math.multiply(a, b);
  },
  doDivide: (a: number, b: number) => {
    math.divide(a, b);
  },
};

jest.mock("./math");

describe("app", () => {
  it("should call math.add", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });

  it("should call multiply", () => {
    app.doMultiply(2, 4);
    expect(math.multiply).toHaveBeenCalledWith(2, 4);
  });
});
