import process from "node:process";

const none = Object.freeze({ _type: "none" });
const some = (value) => Object.freeze({ _type: "some", value });

const store = Array(10_000);
const base = process.memoryUsage().heapUsed;

let allocated = 0;

for (let i = 0; i < store.length; i++) {
  const random = Math.random();

  store[i] = random > 0.5 ? some(random) : none;
  allocated += store[i] !== none;
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
