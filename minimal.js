const fs = require("fs");

function parseBase(str, base) {
  let result = 0n,
    b = BigInt(base);
  for (let c of str) {
    let v =
      c >= "0" && c <= "9"
        ? c.charCodeAt(0) - 48
        : c >= "a" && c <= "z"
        ? c.charCodeAt(0) - 87
        : c >= "A" && c <= "Z"
        ? c.charCodeAt(0) - 55
        : -1;
    if (v < 0 || v >= base) throw Error(`Invalid digit ${c} for base ${base}`);
    result = result * b + BigInt(v);
  }
  return result;
}

function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a < 0n ? -a : a;
}

function addFrac([n1, d1], [n2, d2]) {
  let num = n1 * d2 + n2 * d1,
    den = d1 * d2,
    g = gcd(num, den);
  return [num / g, den / g];
}
function mulFrac([n1, d1], [n2, d2]) {
  let num = n1 * n2,
    den = d1 * d2,
    g = gcd(num, den);
  return [num / g, den / g];
}

function solve(file) {
  let data = JSON.parse(fs.readFileSync(file, "utf8"));
  let points = Object.keys(data)
    .filter((k) => k !== "keys")
    .map((x) => [BigInt(x), parseBase(data[x].value, +data[x].base)])
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .slice(0, data.keys.k);

  let sum = [0n, 1n];
  for (let i = 0; i < points.length; i++) {
    let [xi, yi] = points[i],
      weight = [1n, 1n];
    for (let j = 0; j < points.length; j++) {
      if (i !== j) weight = mulFrac(weight, [-points[j][0], xi - points[j][0]]);
    }
    sum = addFrac(sum, mulFrac([yi, 1n], weight));
  }
  return sum[1] === 1n ? sum[0] : sum[0] / sum[1];
}

console.log(solve(process.argv[2]).toString());
