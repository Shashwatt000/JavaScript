const data = require("./users.json")
data.forEach(element => {
    var tummy = element.firstName;
    var bobby = element.lastName;
    socky = tummy.concat(" ",bobby);
    console.log(socky);
});
