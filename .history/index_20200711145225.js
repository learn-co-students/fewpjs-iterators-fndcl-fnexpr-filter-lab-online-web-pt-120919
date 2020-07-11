function findMatching(drivers, driverQuery) {
  return drivers.filter(driver => driver.toLowerCase() === driverQuery.toLowerCase())
}
function fuzzyMatch(driversTwo, driverQueryTwo) {
  console.log(driversTwo, driverQueryTwo)
  debugger
  return driversTwo.filter(driver => driver.substring(0, driverQueryTwo.length) === driverQueryTwo)
}

function matchName(){

}