// Code your solution here
function findMatching(driver, string) {
    return driver.filter(name => 
        name.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(driver, string) {
    return driver.filter(name => 
        name.split('')[0] === string.split('')[0]

    )
}

function matchName(drivers, string) {
    return drivers.filter( driver => driver.name === string )
    
  


}