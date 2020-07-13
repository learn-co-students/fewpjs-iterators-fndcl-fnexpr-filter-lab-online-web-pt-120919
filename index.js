// Code your solution here

function findMatching(arr, name){
    return arr.filter(function(n) {
        return n.toLowerCase() == name.toLowerCase();
    })
}

function fuzzyMatch(arr, letter){
    return arr.filter( name => {
        return name.indexOf(letter) == 0
    })
}

function matchName(arr, name){
    return arr.filter( n => {
        return name == n.name
    })
}