const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json({urlencoded: false}))
app.use(cors({}))

app.post("/login", async (request, response) => {
 console.log(request.body)
 // const email = response.body.email
 const password = request.body.password
 return response.status(200).json({
   data: 'prost',
 })

});

app.listen(5100, () => console.log("WeatherApp."));
//shitft alt f prettier
