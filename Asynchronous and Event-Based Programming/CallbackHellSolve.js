// What is "callback hell" and how do promises help solve this problem? Provide a brief example.

doSomething(function (result1) {
  dosomethingElse(result1, function (result2) {
    doAnotherThing(result2, function (result3) {
      console.log(result3);
    });
  });
});

doSomething()
  .then((result1) => dosomethingElse(result1))
  .then((result2) => doAnotherThing(result2))
  .then((result3) => console.log(result3))
  .catch((err) => console.error(err));
