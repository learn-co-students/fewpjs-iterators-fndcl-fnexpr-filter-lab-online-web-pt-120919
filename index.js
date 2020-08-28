// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter( driver => driver.toLowerCase() === string.toLowerCase() )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0 )
    // you are iterating through the drivers array using the filter method you are looking at them as single instances
    // .indexOf() is a method that returns the first index at which a given element can be found in the array
    // since you are iterating, a match will always return a 0 which will therefore be 'true' after using the comparison operator
    // if 'false', the element will be removed from the newly created array by the filter method
}

function matchName(drivers, string) {
    return drivers.filter( driver => driver.name === string )
}