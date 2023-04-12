let sentences = [
    "tom jack", "oggie olive", "sunny deol"
];

// let words = sentences.map(e => e.split(" "));
let words = sentences.flatMap(mum);
function mum(e){
    return e.split(" ");
}
    

console.log(words);