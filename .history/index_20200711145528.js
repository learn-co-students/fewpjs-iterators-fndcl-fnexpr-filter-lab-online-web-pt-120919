function findMatching(drivers, driverQuery) {
  return drivers.filter(driver => driver.toLowerCase() === driverQuery.toLowerCase())
}
function fuzzyMatch(driversTwo, driverQueryTwo) {
  return driversTwo.filter(driver => driver.substring(0, driverQueryTwo.length) === driverQueryTwo)
}

function matchName(driversThree, driverQueryThree){
  console.log(driversThree, driverQueryThree)
  debugger
  return driversThree.values.filter(driver => driver === driverQueryThree)
}