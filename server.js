const http = require('http')

const handler = (request,response)=>{
  const url = [
    'https://',
    request.headers.host,
    request.url
  ]
  if(request.headers['x-forwarded-proto']==='http'){

  //  response.writeHead(301,{
  //   'Location': url.join('')
  //  })
  //  response.end()
  //  return
  }
  const result = [
    'Hey, whats up?',
    process.env.TEST_SECRET,
    JSON.stringify(request.url,null,4),
    JSON.stringify(request.headers,null,4),
    url.join('')
  ]
  response.write(result.join(' '))
  response.end()
}

http.createServer(handler)
.listen(80)
