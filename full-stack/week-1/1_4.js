

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}



function sos(a,b,something){
    console.log(something())
    const val1 = something(a);
    const val2 = something(b);
    return val1 + val2;
}



const ans = sos(2,2 ,function(n) {return n+1;})

console.log(ans);