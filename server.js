const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

const rappers = {
          '21 savage': {
              'age':'31',
              'birthName':'sheya bin abraham-joseph',
              'birthLocation':'London, England'

          },
          'chance the rapper': {
               'age':'31',
               'birthName':'Chancelor Banett',
               'birthLocation':'Chicago, USA'     
          },
          'unknown': {
                    'age':'unknown',
                    'birthName':'unknown',
                    'birthLocation':'unknown'     
          }

}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + "/index.html")
})

app.get('/api/:name' , (request, response)=>{
    const rapperName = request.params.name.toLocaleLowerCase()
    if( rappers[rapperName] ){
          response.json(rappers[rapperName])
    }else{
          response.json(rappers['unknown'])
    }
   
})

app.listen(process.env.PORT || PORT, ()=>{
          console.log(`The server is running on port ${PORT} better go and catch it!`)
})