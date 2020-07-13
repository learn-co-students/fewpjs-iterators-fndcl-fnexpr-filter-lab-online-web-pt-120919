function findMatching(drivers, string) {
  return drivers.filter(driverMatch => 
    driverMatch.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driverMatch =>
    driverMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string)
}