import express from 'express'
import { index } from '../controller/index'


const router = express.Router()
router.get('/', index)

export default router