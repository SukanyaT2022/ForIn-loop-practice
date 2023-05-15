const person = {fname:"John", lname:"Doe", age:25};

let text = '';
for(let x in person) {
    //x is key and person is object
  text += person[x];
}
console.log(text);