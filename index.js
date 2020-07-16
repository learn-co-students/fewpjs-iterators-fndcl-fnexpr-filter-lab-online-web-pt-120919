function findMatching(drivers, name){
    let match = drivers.filter(person => {
        return person.toLowerCase() === name.toLowerCase()
    })
    return match
}
function fuzzyMatch(drivers, name){
    let letters = name.split('')
    let match = drivers.filter(person => {
        for (let i = 0; i < letters.length; i++){
            return person.startsWith(letters[i])
        }
    })
    return match
}

function matchName(drivers, name){
    let match = drivers.filter(person => person.name === name)
    return match
}
