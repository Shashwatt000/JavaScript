const data = require("./users.json")
data.forEach(element => {
    var xxx = element.address
    const f = Object.entries(xxx);
    console.log(f);
});


