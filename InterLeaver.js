class IntegerIt {
  constructor(arr) {
    this.arr = arr;
    this.index = 0;
  }

  next() {
    return this.arr[this.index++];
  }

  hasNext() {
    return this.index < this.arr.length;
  }
}

class Interleaver {
  constructor(iterators) {
    this.queue = iterators.filter(it => it.hasNext());
  }

  hasNext() {
    return this.queue.length > 0;
  }

  next() {
    if (!this.hasNext()) return null;

    const it = this.queue.shift();
    const value = it.next();

    if (it.hasNext()) {
      this.queue.push(it);
    }

    return value;
  }
}

// Usage
const interleaver = new Interleaver([
  new IntegerIt([1, 2, 3, 4]),
  new IntegerIt([10]),
  new IntegerIt([50, 100])
]);

while (interleaver.hasNext()) {
  console.log(interleaver.next());
}
