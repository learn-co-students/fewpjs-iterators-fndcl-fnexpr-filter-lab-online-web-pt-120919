function findMatching(drivers, string) {
    let x = drivers.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase()
    })
    return x
}

function fuzzyMatch(drivers, string) {
    let x = drivers.filter(driver =>{
        if ((string.length >= 2) && string.substring(0,2) == driver.substring(0,2)) { //string[0] + string[1] == driver[0] + driver[1]){
            return driver
        }
    })
    return x 
}

function matchName(drivers, string) {
    let x = drivers.filter(driver => {
        return driver.name === string 
    })
    return x
}