import { PrismaClient } from '@prisma/client'
// PrismaClient() will handle all the connection to the database
const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.create({ data: { name: "Huy"}})
    await prisma.user.create({
        data: {
            
        }
    })
}

main()
    .catch(e => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })