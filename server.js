const http = require('http')

const handler = (request,response)=>{
  response.write('Hey, whats up? How are you?')
  response.end()
}

http.createServer(handler)
.listen(80)
