// Code your solution he

function findMatching(drivers, name) {
    return drivers.filter(match => 
        match.toLowerCase() === name.toLowerCase()
        )
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(match => 
        match.toLowerCase().indexOf(name.toLowerCase()) === 0
        )
}

function matchName(drivers, name) {
    return drivers.filter(match => match.name === name)

}