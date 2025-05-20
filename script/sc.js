const list =["Roberto","Luis","Pedro","Juan","María","Laura","Carolina","Julia"];
console.log(list);

list.push("Juani","Alex");
console.log(list);

list.splice(2,0,"Marta")
console.log(list);

list.shift();
console.log(list);

const otherList= ["José","Vicente","Trina","Claudia","Beatríz"];
console.log(otherList);

const party= (list).concat(otherList);
console.log(party);



// console.log(party.toUpperCase);
