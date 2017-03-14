var http = require('http')

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Home</h1>' + '<p>Hello! Welcome to my site!</p>' +
      'Here are the links to my other pages ' +
      '<a href="/cuteness">Cuteness</a> ' + '<a href="/random-joke">Random Joke</a>' )
  } else if (request.url === '/random-joke') {
    var random1 = Math.random() * (20 - 1)
    if (random1 < 5) {
      response.end('<p>Knock, knock! Who\’s there? Opportunity! That is impossible. Opportunity doesn\’t come knocking twice!</p>' + 'Here are the links to my other pages ' +
      '<a href="/cuteness">Cuteness</a> ' + '<a href="/">Home</a>')
    } else if (random1 > 15) {
      response.end('<p>Knock knock. Who\’s there? An extraterrestrial. Extraterrestrial who? What – how many extra-terrestrials do you know? </p>' + 'Here are the links to my other pages ' +
      '<a href="/cuteness">Cuteness</a> ' + '<a href="/">Home</a>')
    } else
      response.end('<p>Knock knock. Who\'s there? Beats.Beats who? Beats me.</p>' + 'Here are the links to my other pages ' +
      '<a href="/cuteness">Cuteness</a> ' + '<a href="/">Home</a>')
  } else if (request.url === '/cuteness') {
    response.end(
      '<p>Aww! He is the cutest thing!</h1>'+
      '<img src="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg" alt="cute animal">' + 'Here are the links to my other pages ' +
      '<a href="/">Home</a> ' + '<a href="/random-joke">Random Joke</a>')
  } else {
    response.end('The requested URL ' + request.url + ' was not found on this server.')
  }
})

var port = process.env.PORT || 8080
server.listen(port)

console.log('Server running at http://localhost:' + port + '/')
