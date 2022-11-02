import { connectToDb } from "../util/db.js"

export const userLoginService = async (user) => {

    const db = await connectToDb()
    console.log('1. userService', user.username)
    const result = await db.collection('benutzer').findOne({username: user.username })
    console.log('2. userService',result)

    return result
}