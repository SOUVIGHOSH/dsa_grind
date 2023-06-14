//mport Heap from "./heap.js";
const Heap = require("./heap");

describe("Heap", () => {
  it("should add elements in Heap", () => {
    const heap = new Heap();
    heap.push(5);
    heap.push(1);
    heap.push(3);
    expect(heap._list).toEqual([1, 5, 3]);
  });
  it("should return elements in sorted order", () => {
    const heap = new Heap();
    heap.push(5);
    heap.push(1);
    heap.push(3);
    let array = [];
    while (heap._size > 0) array.push(heap.pop());
    expect(array).toEqual([1, 3, 5]);
  });
});
