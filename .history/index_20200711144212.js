function findMatching(drivers, driverQuery) {
  console.log(drivers, driverQuery)
  return drivers.filter(driver => driver === driverQuery)
}
