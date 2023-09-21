const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to DB successfully!'))
    .catch(error => console.log(error))
}

module.exports = connectToMongo


// const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/"  

// const connectToMongo = ()=>{
//  mongoose.connect(mongoURI)
//     console.log("Connected to mongoose successfully");
 
// }

// module.exports = connectToMongo;