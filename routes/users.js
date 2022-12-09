const { getUsers, getDetailUser } = require('../controllers/users')

// Item schema
const User = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' }
    }
}
// Options for get all users
// Notes: Schema to decide which field to return
const getUsersOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: User
            }
        }
    },
    // You can use handler for calling function handle routes endpoint
    handler: getUsers
}

const getUserOpts = {
    schema: {
        response: {
            200: User
        }
    },
    handler: getDetailUser
}

function userRoutes(fastify, options, callback) {
    // USERS

    // Get list users
    fastify.get('/users', getUsersOpts)

    // Get detail user

    // TRADITIONAL WAY: No handler for calling function handle routes endpoint
    // fastify.get('/users/:id', getUserOpts, async (req, res) =>  {
    //     const { id } = req.params;
    //     res.send(await prisma.user.findUnique({
    //         where: {
    //             id: id
    //         }
    //     }))
    // })

    // HANDLER WAY:
    fastify.get('/users/:id', getUserOpts)

    callback()
}

module.exports = userRoutes