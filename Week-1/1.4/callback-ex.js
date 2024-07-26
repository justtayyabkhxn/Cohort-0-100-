function doesCalcuation(a,b,operation){
    const ans1=operation(a);
    const ans2=operation(b);
    return ans1+ans2;
}

function square(x){
    return x*x;
}
function cube(x){
    return x*x*x;
}

console.log(doesCalcuation(5,6,cube));
