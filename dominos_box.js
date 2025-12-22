class DominoBox {
  constructor() {
    this.dominos = []; // store normalized string dominos like "1-2"
  }

  // Normalize each domino by sorting the pair
  normalize(domino) {
    const [a, b] = domino;
    return a < b ? `${a}-${b}` : `${b}-${a}`;
  }

  add(dominos) {
    for (const domino of dominos) {
      this.dominos.push(this.normalize(domino));
    }
  }

equals(otherBox) {
    if (this.dominos.length !== otherBox.dominos.length) return false;

    const count1 = new Map();
    const count2 = new Map();

    for (const d of this.dominos) {
      count1.set(d, (count1.get(d) || 0) + 1);
    }

    for (const d of otherBox.dominos) {
      count2.set(d, (count2.get(d) || 0) + 1);
    }

    if (count1.size !== count2.size) return false;

    for (const [key, val] of count1.entries()) {
      if (!count2.get(key) || count2.get(key) !== val) return false;
    }

    return true;
  }
}


const box1 = new DominoBox();
const box2 = new DominoBox();

console.log(box1.equals(box2)); // true

box1.add([[1, 2], [3, 4]]);
console.log(box1.equals(box2)); // false

box2.add([[4, 3], [1, 2]]);
console.log(box1.equals(box2)); // true
