// const i=[6,7,3,4,4,5,5,8,8,1];
// i.push(9);
// console.log(i);

// function unique(arr){
//     return [...new Set(arr)]
// }
// const arr2=unique(i)
// console.log(arr2);
// console.log(arr2.sort((a, b) => a - b));

const nums = [1, 2, 3, 4, 5, 6];
const sum=nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const filtered = nums.filter(num => num % 2 === 0);
console.log(filtered);

const mapped = nums.map(num => num * 2);
console.log(mapped);

