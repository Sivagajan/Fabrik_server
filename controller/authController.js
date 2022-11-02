import { verifyToken } from "../util/token.js"

export const verifyBearer = (req,res) => {
    try{
        const token = req.headers.authentication.split(' ')[1]

        const result = verifyToken(token)
        console.log(result)
        res.status(200).json({state: true})

    }catch(error){
        res.status(501).json({state: false})
    }
}