import express from 'express'
import { handleSignUp } from '../controller/handleSignUp.js'
import { handleLogIn } from '../controller/handleLog.js'

const router = express.Router()

router.post('/',handleSignUp)
router.post('/',handleLogIn)
export default router