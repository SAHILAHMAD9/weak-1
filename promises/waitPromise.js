/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
  wait(2000).then(console.log("received"));
  function wait(n) {
    setTimeout(() => {
      return new Promise(() => {
        console.log("into promise body");
      });
    }, n);
  }
  wait(4000);
  