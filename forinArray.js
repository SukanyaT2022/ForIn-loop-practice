const num = [2,4,6,9,15];
let total = 0;
for (let x in num){
    //x is index position 0, 1,2,3
    total += num[x];
}
console.log(total);

