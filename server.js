const http = require('http')

const handler = (request,response)=>{
  response.write('Hey, whats Serhii?')
  response.end()
}

http.createServer(handler)
.listen(80)
