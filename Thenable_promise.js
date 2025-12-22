class Thenable {
  constructor(value) {
    this.value = value;
  }

  then(resolve, reject) {
    setTimeout(() => {
      resolve(this.value * 2);
    }, 500);
  }
}

const t = new Thenable(10);

Promise.resolve(t).then(result => {
  console.log(result); // 20
});

/*
Promise.resolve(x) does:

check if x is an object

check if x.then exists and is a function

if yes → call x.then(resolve, reject)

if no → resolve immediately

*/