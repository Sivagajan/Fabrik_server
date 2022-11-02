export const addMachineController = (req, res) => {

    const machine = req.body


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