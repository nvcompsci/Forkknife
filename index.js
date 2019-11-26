//Import express framework
const express = require("express")
//Initialize server object
const app = express()

let users = []
let leaderboard = []

//Parse request data coming in
app.use(express.json())
//Serve ‘public’ folder as static website
app.use( express.static('public') )

//Methods GET, POST, PUT, DELETE
app.post("/login", (request, response) => {
    let username = request.body.username
    console.log( username )
    users.push( username )
    response.send("You logged in successfully.")
})

app.get("/test", (request, response) => {
    response.send("test successful")
})

app.get("/leaders", (request, response) => {
    response.send(leaderboard)
})

app.post("/score", (request, response) => {
    let data = request.body
    leaderboard.push(data)
    response.send()
})

//Listens for web requests
app.listen(80, () => console.log("Server started") )









