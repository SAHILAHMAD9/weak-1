var counter = 1;
function printfn() {
  console.clear();
  console.log(counter);
  counter += 1;
  // 2=> setTimeout(printfn, 1000);
}
for (let i = 1; i <= 100; i++) {
  setTimeout(printfn, i*1000);
}

// 2=> setTimeout(printfn, 1000);

// OR use setInterval();

setInterval(printfn,1000);
