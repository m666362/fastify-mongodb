require("dotenv").config();
// CommonJs
const fastify = require('fastify')({
  logger: true
})

// // Declare a route
// fastify.get('/', function (request, reply) {
//   reply.send({ hello: 'world I am here' })
// })

// fastify.register(require('./our-first-route'))
fastify.register(require('./Route/items', {
    prefix: '/foo',
}))

// Run the server!
fastify.listen(process.env.PORT || 3006, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`);
})