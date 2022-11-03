import { addMachineService, getAllFreeMachineService, getAllMachineService } from "../services/machineService.js"

export const addMachineController = async (req, res) => {
    
    try{
        const machine = req.body
        console.log(machine)
        const adding = await addMachineService(machine)
        console.log(adding)

        res.status(200).json(adding)
    }catch(error){
        res.status(500).json({error: error})
    }
}

export const getAllMachineController = async (req, res) => {

    try{
        const result = await getAllMachineService()

        res.status(200).json(result)

    }catch(error){
        res.status(500).json({error: error})
    }
}

export const getAllFreeMachineController = async (req, res) => {

    try{
        const result = await getAllFreeMachineService()

        res.status(200).json(result)

    }catch(error){
        res.status(500).json({error: error})
    }
}