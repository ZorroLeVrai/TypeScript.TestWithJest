const getSuccessiveNumbers = require('../src/index');

test("should return the right values for 55", () => {
  const result = getSuccessiveNumbers(55);
  expect(result).toHaveLength(3);
  expect(result[0]).toEqual("1+2+3+4+5+6+7+8+9+10");
  expect(result[1]).toEqual("9+10+11+12+13");
  expect(result[2]).toEqual("27+28");
});

describe("test getSuccessiveNumbers", () => {
  it("should return the right values for 55", () => {
    const result = getSuccessiveNumbers(55);
    expect(result).toHaveLength(3);
    expect(result[0]).toEqual("1+2+3+4+5+6+7+8+9+10");
    expect(result[1]).toEqual("9+10+11+12+13");
    expect(result[2]).toEqual("27+28");
  });
});