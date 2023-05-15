const student = {
    math: 50,
    english: 67,
    biology: 84,
    writing: 78
    }
    
    let total = 0;
    for (let x in student){
        total += student[x];// this the new way to combine
    //  old way   total = total + student[x];
    }
    console.log(total);

   
