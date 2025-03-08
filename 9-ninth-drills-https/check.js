let a = new Promise((res) => {
  console.log("yess");

  setTimeout(function () {
    setTimeout(() => {
      res(
        new Promise((resolve) => {
          resolve("HAA DONE");
        })
      );
      console.log("second is also over");
    }, 2000);

    console.log("First timeout over");
  }, 1000);
});

a.then(console.log);
