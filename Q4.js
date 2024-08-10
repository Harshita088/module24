{
    console.log(x);  // undefined
    console.log(y);  // ReferenceError: Cannot access 'y' before initialization
    console.log(z);  // ReferenceError: Cannot access 'z' before initialization
    
    var x = "PW";
    let y = "Skills";
    const z = "!";
    
    console.log(x);  // "PW"
    console.log(y);  // "Skills"
    console.log(z);  // "!"
}