let info = new Userinfo();

async function t1(){
    console.log(await info.battary())
    console.log(await info.ip())
    console.log(await info.position())
}
t1();