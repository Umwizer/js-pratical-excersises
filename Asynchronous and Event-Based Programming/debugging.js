//What's the difference in behavior between these two approaches?
// Approach A
async function approach1() {
  const a = await asyncTask1();
  const b = await asyncTask2();
  return [a, b];
}
//runs task sequentially

// Approach B
async function approach2() {
  const [a, b] = await Promise.all([asyncTask1(), asyncTask2()]);
  return [a, b];
}
//run tasks in parallel with promise.all
