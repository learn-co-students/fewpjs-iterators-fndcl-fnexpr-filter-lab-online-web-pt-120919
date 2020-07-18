// function findMatching(drivers, string) {
//     let match = drivers.filter( d => {
//         return d.toLowerCase() === string.toLowerCase()
//     })
// }

function findMatching(drivers, string) {
    return drivers.filter( d =>
        d.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( d =>
        d.startsWith(string)
    )
}

function matchName(drivers, string) {
    return drivers.filter( d =>
        d.name === string
    )
}