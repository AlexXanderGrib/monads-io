import process from "node:process";

const Type = Object.freeze({
  None: 0,
  Some: 1
});

class Some {
  static create(value) {
    return new Some(value);
  }

  type = Type.Some;

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

  type = Type.None;
  constructor() {
    Object.freeze(this);
  }
}

const store = Array(10_000);
const base = process.memoryUsage().heapUsed;

let allocated = 0;

for (let i = 0; i < store.length; i++) {
  const random = Math.random();

  store[i] = random > 0.5 ? Some.create(random) : None.create();
  allocated += store[i] !== None.create();
}

const diff = process.memoryUsage().heapUsed - base;
const KB = 1024;

const total = diff;
const perSome = total / allocated;

console.log(
  (total / KB).toFixed(2),
  "KB -",
  Math.ceil(perSome),
  "bytes / Some"
);
