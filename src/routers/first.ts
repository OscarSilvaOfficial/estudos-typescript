import express from 'express'
import { sendmail } from '../views/sendmail/index'

const router = express.Router()

router.get('/', sendmail)

export default router