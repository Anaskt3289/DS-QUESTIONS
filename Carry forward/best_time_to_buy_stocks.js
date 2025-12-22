/*
You are given an array prices where prices[i] is the price of given stock on the i th day
You want to maximize your profit by choosing a single day to buy and choose a different day in future to sell that stock.
Return maximum profit you can achieve , if not return 0.
*/

const prices = [7,1,5,3,6,4]
let min = prices[0]
let profit = 0

for(let i = 0 ; i< prices.length; i++){
    if(prices[i] < min) min = prices[i];
    if((prices[i] - min) > profit) profit = prices[i] - min;
}

console.log('Maximum profit ::', profit);
