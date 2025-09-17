import { Request, Response } from 'express';
import * as service from '../services/player-services'; // Importa tudo como service
import { statisticsModel } from '../models/statistics-model';

export const getPlayerController = async (req: Request, res: Response) => {
    const data = await service.getPlayerService() // Chama o serviço
    res.status(data.statusCode).json(data.body)
}

export const getPlayerByIdController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const data = await service.getPlayerByIdService(id)
    res.status(data.statusCode).json(data.body)
}

export const postPlayerController = async (req: Request, res: Response) => {
    const bodyValue = req.body
    const insertData = await service.postPlayerService(bodyValue)

    if(insertData) {
        res.status(insertData.statusCode).json(insertData.body)
    }
}

export const deletePlayerController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const deleted = await service.deletePlayerService(id)

    res.status(deleted.statusCode).json(deleted.body)


}

export const updatePlayerController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: statisticsModel = req.body
    const updated = await service.updatePlayerService(id, bodyValue)

    res.status(updated.statusCode).json(updated.body)

}