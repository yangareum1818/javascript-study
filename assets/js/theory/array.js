// array 배열 추가,삭제
const arr = ["Jazz", "Blues"];
const newArr = arr;

arr.push("Rock-n");
arr.push("AARock-n");
arr.push("AAARock-n");
newArr.push("Roll");
console.log(arr);

arr[Math.floor((arr.length - 1) / 2)] = "Classics";
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("Rap", "Reggae");
console.log(arr);
