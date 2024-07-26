//import
var express = require('express')
require('./connection')

var empModel=require("./model/employee")

//initialize
var app = express();

//middleware{}
app.use(express.json());

//cors
//import
var cors = require("cors")
//call cors
app.use(cors())


//api creation
app.get('/', (req, res) => {
    res.send("message for trial")
})

app.get('/app', (req, res) => {
    res.send("page api")
})

//add data api (post in postman)
app.post('/add', async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: "data added" })
    }

    catch (error) {
        console.log(error);
        }
})

//view data api(get in postman)
app.get('/view', async (req,res) => { 
    try {
        var data = await empModel.find()
        res.send(data)
    }
    
    
    catch (error) {
        console.log(error)
    }
})

//delete data api(delete in postman)
app.delete("/remove/:id", async (req, res) => { 
    try {
        await empModel.findByIdAndDelete(req.params.id) 
        res.send({message: 'deleted'})
    }
    catch (error) {
        console.log(error)
    }
})

//update data api(put in postman)
app.put("/update/:id", async (req, res) => { 
    try { 
        var data=await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message:"updated", data })
    }
    catch (error) {
        console.log(error)
    }

})

//port
app.listen(3005, () => {
    console.log("port is up")
    
});