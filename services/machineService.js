import {connectToDb} from '../util/db.js'

export const getAllMachineService = async () => {
    const db = await connectToDb()
    const result = db.collection('maschinen').find().toArray()

    return result
}

export const getAllFreeMachineService = async () => {
    const db = await connectToDb()
    const result = db.collection('maschinen').find().toArray() // umschreiben

    return result
}
