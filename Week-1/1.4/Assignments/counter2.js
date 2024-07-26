var counter=0;
function mycounter(){
    console.clear();
    console.log(counter++);
}

for(let i=0;i<1000;i++){

    setTimeout(mycounter,i*1000);
}