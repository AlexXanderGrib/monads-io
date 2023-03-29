import process from "node:process";

const none = { _type: "none" };
const just = (value) => ({ _type: "just", value });

const store = Array(10_000);
const base = process.memoryUsage().heapUsed;
let allocated = 0;

for (let i = 0; i < store.length; i++) {
  const random = Math.random();

  store[i] = random > 0.5 ? just(random) : none;
  allocated += store[i] !== none;
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
