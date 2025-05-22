const list = ["Roberto", "Luis", "Pedro", "Juan", "María", "Laura", "Carolina", "Julia"];
console.log(list);

list.push("Juani", "Alex");
console.log(list);

list.splice(2, 0, "Marta")
console.log(list);

list.shift();
console.log(list);

const otherList = ["José", "Vicente", "Trina", "Claudia", "Beatríz"];
console.log(otherList);

let party = (list).concat(otherList);
console.log(party);


let mayusParty = party.join(",");
party=mayusParty.toUpperCase()
console.log(party);

let partyArray=party.split(",");
console.log(partyArray);

guest=prompt("¿Quién falta en la lista");
let findGuests= partyArray.filter((missing)=>{
    if (missing==guest) return true;
    else return false;
})
console.log(findGuests);

