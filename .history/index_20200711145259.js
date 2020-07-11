function findMatching(drivers, driverQuery) {
  return drivers.filter(driver => driver.toLowerCase() === driverQuery.toLowerCase())
}
function fuzzyMatch(driversTwo, driverQueryTwo) {

  return driversTwo.filter(driver => driver.substring(0, driverQueryTwo.length) === driverQueryTwo)
}

function matchName(){

}