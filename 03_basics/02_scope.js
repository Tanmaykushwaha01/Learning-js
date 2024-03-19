var a = 30 // var has global scope
// value can reassign from anyhwere cam can acees and update value outside the block


if (true) {
    var a = 300
    let b = 200  // let has block scope & value stored only inside the block or rhis scope same 
    const c = 100
}

console.log(a);
// console.log(b); // wont run because there is no global let
// console.log(c); // wont run because there is no global const

