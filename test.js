//Review arrays in javascript
//Create an array (empty)
let wins = []
let data = [[],[]]
//Create an array (with values)
//               0               1            2
let teams = ["Manchester United", "Liverpool", "Barcepona"]
//Add item to array
wins.push(8)
wins[wins.length] = 8
//Set specific item
teams[2] = "Barcelona"
//Get specific item
teams[1]
console.log( teams[1] )
//How many items in array?
teams.length
//Get first item
teams[0]
//Get last item
teams[teams.length-1]
//Loop through array
teams.forEach( (team, i) => console.log(i + ": "+team) )

//is the same as...
/*for (let i = 0; i < teams.length; i++) {
    console.log(teams[i])
}*/

//Traditional Functions
function sumNums(nums) {
    //code goes here
}

//Arrow Functions
//named...
sumNums = (nums) => {
    
}

logTeamInfo = (team, i) => console.log(i + ": "+team)

calcPoints = (wins) => wins * 3
wins.forEach(calcPoints)
//anonymous
wins.forEach( winCount => winCount * 3 )






