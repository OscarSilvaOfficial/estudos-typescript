import { Request, Response } from 'express'
import { getCovidSummary } from '../services/endpoint'
import { sendMailService } from '../services/sendmail'


async function index(req:Request, res:Response) {
    return res.json(await getCovidSummary())
}

async function sendMail(req:Request, res:Response) {
    return res.send(sendMailService())
}

export { index, sendMail }