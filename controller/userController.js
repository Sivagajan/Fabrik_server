import { userLoginService } from "../services/userService.js"
import { createToken } from "../util/token.js"

export const userLoginController = async (req, res) => {
    
    const user = req.body

    console.log('userController',user)
    
        const result = await userLoginService(user)

        console.log('usercontroller',result)

        if(result.password === user.password){
            const token = createToken({user: result._id})
            res.status(200).json({token: token})
        }
        else{
            res.status(500).json({message :'Fehler beim anmelden'})
        }
    
}