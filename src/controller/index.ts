import { Request, Response } from 'express'
import { getCovidSummary } from '../service/endpoint'

export const index = async (req:Request, res:Response) => {
    return res.json(await getCovidSummary())
}