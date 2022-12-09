const env = require('dotenv').config();
require('@fastify/static')
const items = require('./Items');
const fastify = require('fastify')({logger: true})
fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' },
    }
})
fastify.register(require('./routes/users.js'))

// ITEMS
fastify.get('/items', (req, res) => {
    res.send(items)
})
fastify.get('/items/:id', (req, res) => {
    const {id} = req.params;
    
    res.send(items)
})

const start = async () => {
    try {
        await fastify.listen({ port: process.env.PORT, host: '127.0.0.1' })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()