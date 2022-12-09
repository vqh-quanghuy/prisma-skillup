const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getUsers = async (req, res) => {
    res.send(await prisma.user.findMany())
}

const getDetailUser = async(req, res) => {
    const { id } = req.params;
    res.send(await prisma.user.findUnique({
        where: {
            id: id
        }
    }))
}

module.exports = {
    getUsers,
    getDetailUser
}