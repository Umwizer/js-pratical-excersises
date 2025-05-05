function promiseReturnOne() {
  return promise.resolve(1);
}
async function asyncA() {
  const result = await promiseReturnOne();
  return "Result:" + result;
}
function asyncA() {
  return new Promise((resolve, reject) => {
    promiseReturnOne();
    then((result) => {
      resolve;
      "Result:" + result;
    });
  });
}

// , I think everyone knows the reason why await
//  must be put into the async function. Because
//   if don't put this inside of async, the return won't
//    work because we don't have the resolve function which
//     is provided by the Promise of async.
//      That's all of my basic knowledge from me.
//      So, let's move to the interesting part - solve the exercise. Let's check this example.

async function asyncFirst() {
  console.log("asyncfirst start");
  await asyncSecond();
  console.log("async first end");
}
async function asyncSecond() {
  console.log("asyncSecond");
}
console.log("Start");
setTimeout(function () {
  console.log("SetTimeout 1");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise.resolve()");
});
asyncFirst();
console.log("End");
//  we have some funny parts setTimeout, async, await, Promise...
//  To solve it, I think we may start by converting all of them to Promise aka "Remove the async

function asyncFirst() {
  return new Promise((resolve) => {
    console.log("asyncFirst start");
    asyncSecond().then(() => {
      console.log("asyncFirst end");
      resolve();
    });
  });
}
function asyncSecond() {
  return new Promise((resolve) => {
    console.log("async Second");
    resolve();
  });
}
console.log("Start");
setTimeout(function () {
  console.log("Set TimeOut 1");
}, 0);
promise.resolve().then(() => {
  console.log("Promise.resolve()");
});
asyncFirst();
console.log("End");

//  we have converted all of async await to Promise, not async
// await anymore. So if a couple of functions still give you a headache,
// don't worry! We may move the code from the function to the inline in this step.

console.log("Start");
setTimeout(function () {
  console.log("SetTimeout1");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise 1");
});
new Promise((resolve) => {
  console.log("asyncFirst start");
  new Promise((resolve) => {
    console.log("asyncFirst end");
    resolve();
  });
});
console.log("End");
