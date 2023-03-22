fun2=()=>{
    
    setTimeout(()=>{console.log(a)},10000);
    var a = {"shashwat":"web","Webdevlopment":"nod"}

}
fun=()=>{
   console.log("fun is starting");
   fun2();
   console.log("fun is now stop");
}
fun();