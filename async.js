// const a = 1;
// a=5;
// console.log(a)
fun2=()=>{
    
     setTimeout(()=>{
        console.log("fun2 is starting");
     },10000);
     

}
fun=()=>{
    console.log("fun is starting");
    fun2();
    console.log("fun is now stop");
}
fun();