const num = [1,3,5,8,10];
let total = 0;
//num.forEach(myFunction);
// regular way to use function
// function myFunction(value){
//     total += value
// arrow fuction
//}

// next use arrow function -anoamous function
num.forEach((val)=>{
    total += val
});
console.log(total);