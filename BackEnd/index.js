const connectToMongo = require('./db')
const express = require('express')
var cors =require ('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//Availabel Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend app listening on port http://localhost:${port}`)
})








// const connectToMongo = require('./db');
// const express = require('express');

// const app = express();
// const port = 3000;

// app.use(express.json());

// // Available Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/notes', require('./routes/notes'));

// const options = { serverSelectionTimeoutMS: 100000 };

// (async () => {
//   try {
//     await connectToMongo(options);
//     app.listen(port, () => {
//       console.log(`Example app listening on port http://localhost:${port}`);
//     });
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err.message);
//   }
// })();


