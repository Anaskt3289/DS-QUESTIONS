const function1 = () => {
    console.log("A");

    setTimeout(() => console.log("B"), 0);

    Promise.resolve().then(() => console.log("C"));

    console.log("D");

    //Expected Output → A, D, C, B
}

const function2 = () => {
    Promise.resolve().then(() => {
        console.log(1);
        Promise.resolve().then(() => console.log(2));
    });
    console.log(3);
    //Expected Output → 3 → 1 → 2
}

const function3 = () => {
    async function test() {
        console.log(1);
        await Promise.resolve();
        console.log(2);
    }
    test();
    console.log(3);
    //Expected Output → 1 → 3 → 2
}

const function4 = () => {
    setTimeout(() => {
  console.log("A");
  Promise.resolve().then(() => console.log("B"));
}, 0);

Promise.resolve().then(() => console.log("C"));

    //Expected Output → C → A → B
}

const function5 = () => {
    setTimeout(async () => {
  console.log("X");
  await null;
  console.log("Y");
});

console.log("Z");
    //Expected Output → Z → X → Y
}

const function6 = () => {
    new Promise((res) => {
  console.log(1);
  res();
}).then(() => console.log(2));

console.log(3);

    //Expected Output → 1 → 3 → 2
}

const function7 = () => {
    async function run() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
  await Promise.resolve();
  console.log(3);
}

run();
console.log(4);
    //Expected Output → 1 → 4 → 2 → 3
}

const function8 = () => {
   Promise.resolve().then(() => {
  console.log("A");
  setTimeout(() => console.log("B"), 0);
});
console.log("C");
    //Expected Output → C → A → B
}

const function9 = async () => {
  await new Promise(() => {});
console.log("Hello");

// This line NEVER executes.
// Interviewers ask: "Why does it hang?"

// → Because microtask queue waits forever.
}

