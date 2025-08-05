// Make a code that gives the result of the total sum of these n terms of the sequence.

// See the example: a = 1; d = 2; r = 2; n = 4

// The terms are 1, 6, 20, 56 and the total sum of them is equal to 83.

// The needed function will take in the arguments in the following order: tot_sum_arith_geom(a, d, r, n)

// The above case will be:
// totSumArithGeom(1, 2, 2, 4) ---> 83;
// The value of a, d or r may be a decimal value, too:

// var a = 1, d = 2, r = 0.5, n = 5;
// totSumArithGeom(a, d, r, n) ---> 5.1875;

// var a = 0.99, d = 2, r = 0.777, n = 10;
// totSumArithGeom(a, d, r, n) ---> 25.6329345646;

// var a = 0.99, d = 0.333333, r = 0.777, n = 100;
// totSumArithGeom(a, d, r, n) ---> 9.64768527243;
// Your code will be tested with a great amount of terms up to 5000 in 400 random tests.

// Brute force algorithms are not recommended.

// Enjoy it!!
function totSumArithGeom(a, d, r, n) {
  let s;

  if (r === 1) {
    // When r = 1, the series becomes a simple arithmetic series
    const S_geom = n;
    const S_arithgeom = (n * (n - 1)) / 2;
    s = a * S_geom + d * S_arithgeom;
  } else {
    // General case: r ≠ 1
    const r_pow_n = Math.pow(r, n);
    const r_pow_n_plus_1 = Math.pow(r, n + 1);

    const S_geom = (1 - r_pow_n) / (1 - r);
    const S_arithgeom =
      (r - n * r_pow_n + (n - 1) * r_pow_n_plus_1) / Math.pow(1 - r, 2);

    s = a * S_geom + d * S_arithgeom;
  }

  return s;
}
