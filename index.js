// Code your solution here
function findMatching(collection, string) {
    return collection.filter(s => s.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(collection, string) {
    return collection.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

function matchName(collection, string) {
    return collection.filter(s => s.name === string)
}