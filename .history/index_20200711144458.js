function findMatching(drivers, driverQuery) {
  return drivers.filter(driver => driver.toLowerCase() === driverQuery.toLowerCase())
}
function fuzzyMatch(driversTwo, driverQueryTwo) {
  console.log(driversTwo, driverQueryTwo)
  return driversTwo.filter(driver => driver[0] === driverQueryTwo)
}

function matchName(){
  
}