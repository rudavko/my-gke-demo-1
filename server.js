const http = require('http')

const handler = (request,response)=>{
  response.write('Hey, whats up?'+process.env.TEST_SECRET)
  response.end()
}

http.createServer(handler)
.listen(80)
