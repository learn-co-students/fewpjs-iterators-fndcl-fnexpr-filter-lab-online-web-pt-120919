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
// "sammy".indexOf("sa") === 0 it will equal zero till it doesn't match anymore then it will equal -1
// "sammy".indexOf("sae") === -1

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
        return driver.startsWith(string)
    });
}



  function matchName(source, nameDriver) {
    return source.filter( driver => driver.name === nameDriver)
  }
