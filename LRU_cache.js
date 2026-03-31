// concept : Remove Least Recently Used item

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value); // move to recent

    return value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.map.size >= this.capacity) {
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }

    this.map.set(key, value);
  }
}

const cache = new LRUCache(2);
cache.put(1, "A");

/*
Time Complexity:
get → O(1)
put → O(1)
*/