const data = require("./users.json")
const keys = Object.values(data);
keys.forEach(element => {
    console.log(element);
});