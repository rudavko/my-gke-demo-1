const http = require('http')

const handler = (request,response)=>{
  const result = []
  result.push('Hey, whats up?')
  result.push(process.env.TEST_SECRET)
  result.push(JSON.stringify(request,null,4))
  response.write(result.join(' '))
  response.end()
}

http.createServer(handler)
.listen(80)
