const http = require('http')

const handler = (request,response)=>{
  response.write('Hey, whats up?')
  response.end()
}

http.createServer(handler)
.listen(8080)
