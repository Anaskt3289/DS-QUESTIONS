function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function cumulativeSumTimed(nums, stopAfterMs, intervalMs) {
  let sum = 0;
  const start = Date.now();

  for (let i = 0; i < nums.length; i++) {
    // Before printing, check if time is up
    if (Date.now() - start >= stopAfterMs) {
      console.log("Stopped due to timeout");
      break;
    }

    sum += nums[i];
    console.log(`Sum ::` ,sum);

    // Wait 2 seconds before next print
    await wait(intervalMs);
  }
}
console.log(cumulativeSumTimed([4,4,5,6,67,7,8],3000, 2000));
