import {connectToDb} from '../util/db.js'

export const addWorkerService = async (worker) => {

    console.log('addWorker',worker)
    const db = await connectToDb()
    const result = await db.collection('mitarbeiter').insertOne(worker)

    return result

}

export const getAllFreeWorkersService = async () => {

    const db = await connectToDb()
    const result = await db.collection('mitarbeiter').find({'worksOn':''}).toArray()

    console.log('getAllFreeWorkers',result)
    return result
}

export const getAllWorkersService = async () => {

    const db = await connectToDb()
    const result = await db.collection('mitarbeiter').find().toArray()

    console.log('getAllWorkers',result)
    return result
}