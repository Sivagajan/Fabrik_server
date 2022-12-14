import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {encrypt} from './middleware/encryptMiddleware.js'
import { userLoginController } from './controller/userController.js'
import { verifyBearer } from './controller/authController.js'
import {checkToken} from './middleware/verifyMiddleware.js'
import { addWorkerController, getAllFreeWorkersController, getAllWorkersController } from './controller/workerController.js'
import {getAllMachineController, getAllFreeMachineController, addMachineController} from './controller/machineController.js'


// Falls ihr multer oder den express validator nutzt, importiert diese einfach auch
const PORT = process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// hier ist genung Platz für alle eure Routen
app.get('/', (req,res) => {
    res.status(200).send('Alles OKAY')
})


app.post('/api/login',encrypt,userLoginController )  // login 

app.get('/api/verify',verifyBearer)

app.post('/admin/addworker', checkToken, addWorkerController)
app.get('/admin/allworkers', checkToken, getAllWorkersController)
app.get('/admin/availableworkers', checkToken, getAllFreeWorkersController)

app.post('/admin/addmachine',checkToken, addMachineController)
app.get('/admin/allmachines', checkToken, getAllMachineController)
app.get('/admin/availablemachines', checkToken, getAllFreeMachineController)

// dann werfen wir den Server mal an
app.listen(PORT, () => console.log('Server runs on Port:', PORT))