import { PrismaClient } from '@prisma/client'
// PrismaClient() will handle all the connection to the database
// const prisma = new PrismaClient({log: ["query"]}) // To include query log on run
const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.create({ data: { name: "Huy"}})
    // await prisma.user.deleteMany()

    // CREATE 1 DATA
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Huy",
    //         email: "huy@test.vn",
    //         age: 24,
    //         phone: "09887382423",
    //         citizenId: "09158546415",
    //         // We can update table reference data with create inside of data
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true,
    //             }
    //         }
    //     },

    //     // To include the reference data in the return response add ref key in include tab
    //     // include: {
    //     //     userPreference: true,
    //     // }

    //     // To limit data return by field, use select
    //     // Note: Only include or select can be used at a time, cannot use both at the same time
    //     select: {
    //         name: true,
    //         // limit data return from reference table, use inner select
    //         userPreference: { select: { id: true }},
    //     }
    // })

    // CREATE MULTIPLE DATA
    // By insert array of data
    // Note: cannot use select in createMany, it will return count: {number of data created}
    // const user = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Huy",
    //             email: "huy1@test.vn",
    //             age: 24,
    //             phone: "098873824323",
    //             citizenId: "091585466415",
    //         },
    //         {
    //             name: "Huy",
    //             email: "huy2@test.vn",
    //             age: 25,
    //             phone: "0928874382423",
    //             citizenId: "091585476415",
    //         },
    //         {
    //             name: "Huy",
    //             email: "huy3@test.vn",
    //             age: 26,
    //             phone: "0988373862423",
    //             citizenId: "091585464151",
    //         }
    //     ],
    // })

    // FIND A UNIQUE DATA
    // Note: findUnique always return 1 data
    // const user = await prisma.user.findUnique({
    //     where: {
    //         phone_citizenId: {
    //             phone: "098873824123",
    //             citizenId: "09158546415",
    //         },
    //         // email: "huy@test.vn"
    //         // You can use include or select in find
    //     }
    // })

    // FIND 1 NOT UNIQUE DATA
    // const user = await prisma.user.findFirst({
    //     where: {
    //         name: "Huy",
    //     }
    // })

    // FIND MANY NOT UNIQUE DATA
    // const user = await prisma.user.findMany({
    //     where: {
    //         name: "Huy",
    //     }
    // })

    // WORK WITH DISTINCT
    // const user = await prisma.user.findMany({
    //     where: {
    //         name: "Huy",
    //     },
    //     distinct: ["name", "age"]
    // })

    // WORK WITH PAGINATION take/skip/orderBy
    // const user = await prisma.user.findMany({
    //     where: {
    //         name: "Huy",
    //     },
    //     orderBy: {
    //         age: "asc",     // Order by any data in tabel
    //     },
    //     take: 2,    //Limit by take
    //     skip: 2,    //Skip 2 first order
    // })

    // FIND WITH not/ in/ lt/ gt
    // const user = await prisma.user.findMany({
    //     where: {
    //         // name: { not: "Huy" }, // Same as name !== "Huy"
    //         name: { in: ["Huy", "Huy san"] }, // Same as include in array
    //         // name: { notIn: ["Huy", "Huy san"] }, // Same as not include in array
    //         // age: { lt: 24} //Age < 24
    //         age: { gt: 24} //Age > 24
    //     },
    // })

    // FIND WITH contain/ startsWith/ endsWith/ AND / OR
    // const user = await prisma.user.findMany({
    //     where: {
    //         // AND: [{email: { startsWith: "huy" } }, { email: { endsWith: "@test.vn" }}],     // AND is using when you need multiple condition in same field
    //         // OR: [{email: { startsWith: "huy" } }, { age: { gt: 25 }}],     // OR is using when you need this or that condition to be pass
    //         NOT: [{email: { startsWith: "huy2" } }],     // NOT is same as !field return condition
    //         // email: { contains: "@test.vn" }
    //         // email: { startsWith: "@test.vn" }
    //         // email: { endsWith: "@test.vn" }
    //     },
    // })

    // REFERENCE TABLE CONDITION
    // const user = await prisma.user.findMany({
    //     where: {
    //         // userPreference: {
    //         //     emailUpdates: true
    //         // }
    //         // every (every post have this condition)
    //         // none (None of any user have any post at this condition)
    //         // some (Any post have this condition)
    //         writtenPosts: {
    //             every: {
    //                 title: "test"
    //             }
    //         }
    //     },
    // })

    // const post = await prisma.post.findMany({
    //     where: {
    //         author: {
    //             is: {
    //                 age: 26
    //             },
    //             isNot: {
    //                 age: 25
    //             }
    //         }
    //     }
    // })

    // UPDATE DATA
    // Note: update require unique field but updateMany will not

    // const user = await prisma.user.update({
    //     where: {
    //         email: "huy@test.vn"
    //     },
    //     data: {
    //         email: "huy04@test.vn"
    //     }
    // })

    // const user = await prisma.user.updateMany({
    //     where: {
    //         name: "Huy"
    //     },
    //     data: {
    //         name: "huy new name"
    //     }
    //     // updateMany cannot use select, include
    // })

    // const user = await prisma.user.update({
    //     where: {
    //         email: "huy04@test.vn"
    //     },
    //     data: {
    //         age: {
    //             // increment: 1,    // Increase by n
    //             // decrement: 10    // Decrease by n
    //             divide: 2           // Divide number by n
    //         }
    //     }
    // })

    // Update with existing relationship
    // const user = await prisma.user.update({
    //     where: {
    //         email: "huy04@test.vn"
    //     },
    //     data: {
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         }
    //     }
    // })
    // const user = await prisma.user.update({
    //     where: {
    //         email: "huy04@test.vn"
    //     },
    //     data: {
    //         userPreference: {
    //             connect: {
    //                 id: "9df2c497-55b9-47c9-85da-77f274caffc9",
    //             }
    //         }
    //     }
    // })

    // DELETE A RECORD
    // Note: Delete field have to be unique
    // const user = await prisma.user.delete({
    //     where: {
    //         id: "9df2c497-55b9-47c9-85da-77f274caffc9",
    //     }
    // })
    const user = await prisma.user.findMany()
    // const user = await prisma.user.deleteMany({
    //     where: {
    //         age: { gt: 25 },
    //     }
    // })

    console.log('user :>> ', user);
}

main()
    .catch(e => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })