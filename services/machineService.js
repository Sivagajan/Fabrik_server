import {connectToDb} from '../util/db.js'


export const addMachineService = async (machine) => {

    console.log('addMachine',machine)
    const db = await connectToDb()
    const result = await db.collection('maschinen').insertOne(machine)

    return result
}

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
