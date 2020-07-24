// Code your solution here
function findMatching(drivers, string){
    let match = drivers.filter(n => {return n.toLowerCase() === string.toLowerCase()})
    return match
}

function matchName(drivers, string){
let search = drivers.filter(n => {return n.name === string}) //someting to do with changing case

return search
}

function fuzzyMatch(drivers, string){
let fuz = drivers.filter(n => {return n.startsWith(string)})
return fuz //return to this after learning more about using fuzzy

}