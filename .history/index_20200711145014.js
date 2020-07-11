function findMatching(drivers, driverQuery) {
  return drivers.filter(driver => driver.toLowerCase() === driverQuery.toLowerCase())
}
function fuzzyMatch(driversTwo, driverQueryTwo) {
  console.log(driversTwo, driverQueryTwo)
  debugger
  return driversTwo.filter(driver => driver.match(/[driverQueryTwo]/) === driverQueryTwo)
}

function matchName(){

}