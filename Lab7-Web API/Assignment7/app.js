const express=require('express')

const routes=require('./routes')
const logger=require('morgan')
const app=express()
const path=require('path')




const port=8000

app.use(express.static(path.resolve(__dirname,'public')))

app.use(logger('dev'))



app.use( express.json() );


app.use('/api/', routes);





app.listen(port,()=>{

    console.log(`server started @ http://localhost:${port}`)

});


module.exports=app;