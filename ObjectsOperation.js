const data = require("./users.json")
// console.log(data);
data.forEach((element)=>{
    console.log(element.address.coordinates);
})

