import { Request, Response } from "express";
import { getClubService } from "../services/club-services";

export const getClubs = async (req: Request, res: Response) => {
    const data = await getClubService()
    res.status(data.statusCode).json(data.body)
}