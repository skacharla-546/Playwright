let number = 5;

// for (let i = 0; i < number; i++) {
//     let spaces = " ".repeat(number - i - 1);
//     // console.log(spaces);

//     let stars = "*".repeat(2 * i + 1);
//     // console.log(stars);

//     console.log(spaces + stars);
// }

// for (let i = 0; i < number; i++) {
//     console.log(" ".repeat(number - i - 1) + "*".repeat(2 * i + 1));
// }

for(let i=0;i<number;i++){
let row="";
    for(let j=0;j<number-i-1;j++){
        row+=" ";
    }   
    for(let k=0;k<2*i+1;k++){
        row+="*";
    }
    console.log(row);

}

for(let i=number-1;i>=0;i--){
let row="";
    for(let j=0;j<number-i-1;j++){
        row+=" ";
    }   
    for(let k=0;k<2*i+1;k++){
        row+="*";
    }
    console.log(row);

}