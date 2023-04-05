let arr = ["Vista", "Zest", "Alto", "Nexon"]
arr.copyWithin(0, 3);
console.log(arr);

arr.find((name) => {
    if (name === "Zest") {
        console.log(true);
    } else {
        console.log("false")
        
    }


})
