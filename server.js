const http = require('http')

const handler = (request,response)=>{
  const result = [
    'Hey, whats up?',
    process.env.TEST_SECRET,
    JSON.stringify(request.url,null,4),
    JSON.stringify(request.headers,null,4)
  ]
  response.write(result.join(' '))
  response.end()
}

http.createServer(handler)
.listen(80)
