function  papa(puma){

    return new Promise((resolve,reject)=>{
        if(puma){
        resolve("Request succeed");
        }
        else {
        reject("Request Failed");
        }
        
        
        });
        

}

coke = (result)=>{
    console.log(result);
    }
    limca = (error)=>{
        console.log(error);
        }
        papa(true).then(coke);
        papa(false).catch(limca);