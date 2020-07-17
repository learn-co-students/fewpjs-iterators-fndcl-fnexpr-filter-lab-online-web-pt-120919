// Code your solution here
function findMatching(drivers, driver) {
  return drivers.filter(n => n.toUpperCase() === driver.toUpperCase() )
}

function fuzzyMatch(drivers, stringset) {
  return drivers.filter(driver => driver.startsWith(stringset))
}

function matchName(drivers, driver) {
  return drivers.filter(n => n["name"] === driver)
}
