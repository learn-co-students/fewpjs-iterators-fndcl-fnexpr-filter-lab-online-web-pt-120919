// Code your solution here

let matched = [];

function findMatching(arrae,name){
    matched = arrae.filter(function(element){
         return element.toLowerCase() == name.toLowerCase()
    })
    return matched  
}


function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }