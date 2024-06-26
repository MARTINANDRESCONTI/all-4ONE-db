const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PORT } = require('./routes/config.js')

const { db } = require('./database/db.js');

// const itemRoutes = require('./routes/routes.js')

const app = express();

// const PORT = process.env.PORT || 3000

app.use( cors() )
app.use(express.json())
app.use(morgan('dev'))
// app.use('/items', itemRoutes)

app.get('/', (req, res)=>{
  res.send('Hola mundo')
})

app.listen(PORT, () =>{
  console.log(`server runing on port:${PORT}`);
  db.sync({alter:true});
})