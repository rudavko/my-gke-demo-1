const http = require('http')

const handler = (request,response)=>{
  const result = [
    'Hey, whats up?',
    process.env.TEST_SECRET
  ]
  response.write(result.join(' '))
  response.end()
}

http.createServer(handler)
.listen(80)
