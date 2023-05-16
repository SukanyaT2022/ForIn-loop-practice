const car = ["toyota", 2000, "red"]
let text = "" ;
for(let a of car){
    text += a + " ";
}
text += ' is $400';
console.log(text);

// .join("is $400")