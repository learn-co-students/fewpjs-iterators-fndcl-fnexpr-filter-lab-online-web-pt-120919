// Code your solution here

const findMatching = (drivers, name) => {
let match = drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()

})
    return match
}

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

  function matchName(source, nameDriver) {
    return source.filter( record => record.name === nameDriver)
  }
