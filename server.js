const http = require('http')

const handler = (request, response) => {
  if (request.headers['x-forwarded-proto'] === 'http') {
    const url = [
      'https://',
      request.headers.host,
      request.url
    ]

    response.writeHead(302, {
      Location: url.join('')
    })
    response.end()
    return
  }
  const result = [
    'Hey, whats up?',
    process.env.TEST_SECRET,
    JSON.stringify(Object.keys(request), null, 4),
    JSON.stringify(request.headers, null, 4),
    JSON.stringify(request.url, null, 4)
  ]
  response.write(result.join(' '))
  response.end()
}

http.createServer(handler)
  .listen(80)
