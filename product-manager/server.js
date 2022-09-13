const express = require('express');
const cors = require('cors')
const {productRouter} = require('./server/routes/product.routes')


require('./server/config/mongoose.config')
const app = express()

app.use(express.json());
app.use(cors())

app.use('/api/products', productRouter)

app.listen(8000, () =>{
    console.log("You are now listening to port 8000")
})