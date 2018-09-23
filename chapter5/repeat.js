function repeat (n, action){
    for(i =0; i < n; i++){
        action(i);
    }
}

repeat (7, console.log);

let label =[];
repeat(5, i => {
    label.push(`Unit ${ i + 1}`);
});

console.log(label);