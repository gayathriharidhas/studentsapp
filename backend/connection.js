//import
var mongoose = require("mongoose")

//intialize

mongoose.connect("mongodb+srv://gayathriph91:gayathriph91@cluster0.dwfa6dh.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("db connected")
        
    })
    .catch((err) => {
    console.log(err)
})