// Code your solution here

function findMatching(drivers, lookingFor) {
    return drivers.filter( possibleMatch =>
      possibleMatch.toLowerCase() === lookingFor.toLowerCase()
    )
  }
  
  function fuzzyMatch(drivers, lookingFor) {
    return drivers.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(lookingFor.toLowerCase()) === 0
    )
  }
  
  function matchName(drivers, lookingFor) {
    return drivers.filter( record => record.name === lookingFor)
  }