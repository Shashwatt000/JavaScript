let sentences = [
    "JavaScript Array flatMap()", 
    " ", 
    "is", 
    " ", 
    "Awesome"
];

// let words = sentences.map(e => e.split(" "));
let words = sentences.flatMap(mum);
function mum(element){
    
        return element.split(" "); 
    
    
}
    

console.log(words);