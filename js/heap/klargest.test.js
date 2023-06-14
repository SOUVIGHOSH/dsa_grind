const kthFn = require("./klargest");

describe("Kth Largest method", () => {
  it("should correctly return kth lasrgest from given array", () => {
    expect(kthFn([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
    expect(kthFn([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4);
  });
});
