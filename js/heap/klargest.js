const Heap = require("./heap");

function findKthLargest(nums, k) {
  // creates a min Heap
  let heap = new Heap();
  // inserts first k elements from nums
  for (let i = 0; i < k; i++) {
    heap.push(nums[i]);
  }
  console.log(heap._list);
  for (let i = k; i < nums.length; i++) {
    if (heap.peek() < nums[i]) {
      heap.pop();
      heap.push(nums[i]);
    }
    console.log(heap._list);
  }
  console.log(heap._list);
  return heap.peek();
}

module.exports = findKthLargest;
