import { Router } from 'express'
import { index, sendMail } from '../controller/index'
const router = Router()

router.get('/', index)
router.get('/sendmail', sendMail)

export default router