export function benchmark({
  name,
  just,
  none,
  count = 100_000,
  iterations = 20
}) {
  console.log("Benchmarking implementation:", { name, count, iterations });
  const results = [];

  for (let i = 0; i < iterations; i++) {
    const store = Array(count);
    const base = process.memoryUsage().heapUsed;
    let allocated = 0;

    for (let i = 0; i < store.length; i++) {
      const random = Math.random();
      const isJust = random > 0.5;

      store[i] = random > 0.5 ? just(random) : none;
      allocated += isJust;
    }

    const diff = process.memoryUsage().heapUsed - base;
    const KB = 1024;

    const total = diff;
    const perJust = total / allocated;

    results.push(perJust);

    console.log(
      (total / KB).toFixed(2),
      "KB diff -",
      Math.ceil(perJust),
      "bytes / Just"
    );
  }

  const average = results.reduce((a, b) => a + b, 0) / results.length;

  console.log("Benchmark done", { averageBytes: average });
}
