import { getAllFreeWorkersService, getAllWorkersService  } from "../services/workerService.js"

export const addWorkerController = async (req,res) => {
    
    try{
        const worker = req.body
        const adding = await addWorkerService(worker)
        console.log(adding)

        res.status(200).json(adding)
    }catch(error){
        res.status(500).json({error: error})
    }
}

export const getAllFreeWorkersController = async (req,res) => {

    try{
        const result = await getAllFreeWorkersService()

        res.status(200).json(result)
    }catch(error){
        res.status(500).json({error: error})
    }
}

export const getAllWorkersController = async (req,res) => {

    try{
        const result = await getAllWorkersService()

        res.status(200).json(result)
    }catch(error){
        res.status(500).json({error: error})
    }
}

