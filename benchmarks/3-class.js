import process from "node:process";

class Just {
  static create(value) {
    return new Just(value);
  }

  type = "_just";

  constructor(value) {
    this.value = value;
    Object.freeze(this);
  }
}

class None {
  static instance = new None();
  static create() {
    return None.instance;
  }

  type = "_none";
  constructor() {
    Object.freeze(this);
  }
}

const store = Array(10_000);
const base = process.memoryUsage().heapUsed;

let allocated = 0;

for (let i = 0; i < store.length; i++) {
  const random = Math.random();

  store[i] = random > 0.5 ? Just.create(random) : None.create();
  allocated += store[i] !== None.create();
}

const diff = process.memoryUsage().heapUsed - base;
const KB = 1024;
const total = diff;
const perJust = total / allocated;

console.log(
  (total / KB).toFixed(2),
  "KB -",
  Math.ceil(perJust),
  "bytes / Just"
);
