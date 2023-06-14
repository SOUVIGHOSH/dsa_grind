class Heap {
  constructor(data = [], compareFn = (a, b) => a - b) {
    this._list = [];
    this._compareFn = compareFn;
    this._size = 0;
    this.buildHeap(data);
  }

  buildHeap(data) {
    if (Array.isArray(data)) {
      data.forEach((item) => this.push(item));
    } else {
      this.push(data);
    }
  }

  _swap(index1, index2) {
    [this._list[index1], this._list[index2]] = [
      this._list[index2],
      this._list[index1],
    ];
  }

  _parent(index) {
    return Math.floor((index - 1) / 2);
  }

  _left(index) {
    return index * 2 + 1;
  }
  _right(index) {
    return index * 2 + 2;
  }

  push(val) {
    this._list.push(val);
    let index = this._size;
    this._size++;
    while (
      index > 0 &&
      this._compareFn(this._list[this._parent(index)], this._list[index]) > 0
    ) {
      this._swap(index, this._parent(index));
      index = this._parent(index);
    }
  }

  pop() {
    if (this._size <= 0) {
      console.error("Heap is empty");
      return;
    }

    if (this._size === 1) {
      this._size--;
      return this._list.pop();
    }

    let val = this._list[0];
    this._list[0] = this._list[this._size - 1];
    this._size--;
    this._list.pop();

    this._heapify(0);
    return val;
  }

  _heapify(index) {
    let [leftIndex, rightIndex] = [this._left(index), this._right(index)];

    let heapIndex = index;

    if (
      leftIndex < this._size &&
      this._compareFn(this._list[heapIndex], this._list[leftIndex]) > 0
    )
      heapIndex = leftIndex;
    if (
      rightIndex < this._size &&
      this._compareFn(this._list[heapIndex], this._list[rightIndex]) > 0
    )
      heapIndex = rightIndex;

    if (index != heapIndex) {
      this._swap(index, heapIndex);
      this._heapify(heapIndex);
    }
  }

  peek() {
    if (this._size == 0) return undefined;
    return this._list[0];
  }
}

//export default Heap;
module.exports = Heap;
