function findMatching(drivers, str) {
  let tmp = str.toLowerCase();
  return drivers.filter( driver => {
    return driver.toLowerCase() === tmp;
  });
}

function fuzzyMatch(drivers, str) {
  let match = false;
  return drivers.filter( driver => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === driver[i]) {
        match = true;
      } else {
        match = false; 
        break;
      }
    }
    return match;
  });
}

function matchName(drivers, str) {
  return drivers.filter( driver => {
    return driver.name === str;
  });
}