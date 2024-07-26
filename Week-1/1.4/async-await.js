function async_await(){
    return new Promise(function(resolve){
        resolve("Hello jiiii");
    })
    // return p;
}

async function main(){
    const value=await async_await();
    console.log(value);
}

main();