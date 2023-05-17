let array2D = [//parent ARRAY
    ['banana','apple', 'pinapple','orange'],//child array--index0
    ['cat','dog','fish','lama','chicken']//chils array--index1

]
//we have 1 parent array and 2 child array inside--WE call 2d array

//first for loop for parent
for(let i=0; i<array2D.length; i++){
    // console.log(array2D[i])
    // console.log(array2D[i].length) .length will give only number--it will show 2 coz 2 child array inside
//second loop for child inside parent array
for(let j=0; j<array2D[i].length; j++){
    console.log(array2D[i][j])
}

}