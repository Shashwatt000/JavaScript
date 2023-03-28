const data = require("./users.json")
var p 
var q
var r =[]
data.forEach(element => {
  p = (element.age);
 r.push(p)
  
 
});

function testing(p){
    return p>18;

}
q = r.find(testing)
console.log(q);
