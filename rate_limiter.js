class RateLimiter {
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.requests = new Map();
  }

  isAllowed(userId) {
    const now = Date.now();

    if (!this.requests.has(userId)) {
      this.requests.set(userId, []);
    }

    const timestamps = this.requests.get(userId);

    // Remove old timestamps (O(k), not full scan)
    while (timestamps.length && timestamps[0] < now - this.windowMs) {
      timestamps.shift();
    }

    if (timestamps.length >= this.limit) {
      return false;
    }

    timestamps.push(now);
    return true;
  }
}