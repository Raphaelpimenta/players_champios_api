import { ok, notContent, createContent, badRequest  } from "../utils/http-helper";
import * as repository from '../repositories/players-repository' // Importa tudo como repository
import { Request, Response } from "express";
import { PlayerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";


export const getPlayerService = async () => {
    const data = await repository.findAllPlayers();
    let response = null;

    if(data) {
        response = await ok(data)
    } else {
        response = await notContent()
    }

    return response;
}


export const getPlayerByIdService = async (id: number) => {
    const playerId = await repository.findPlayerById(id)
    let response = null

    if(playerId) {
        response = await ok(playerId)
    } else {
        response = await notContent()
    }

    return response
    
}


export const postPlayerService = async (data: PlayerModel) => {
    // const insert = await repository.insertPlayer(data)

    let response = null

    if(Object.keys(data).length !== 0) {
        await repository.insertPlayer(data)
        response = await createContent()
    } else {
        response = await badRequest()
    }

    return response
}


export const deletePlayerService = async (id: number) => {
    const deleteId = await repository.deletePlayer(id)
    let response = null

    if(deleteId) {
        response = await ok({message: "Usuário deletado!"})
    } else {
        response = await badRequest()
    }


    return response
}



export const updatePlayerService = async (id: number, statistics: statisticsModel) => {

    const updateData = await repository.updatePlayer(id, statistics)

    let response = null

    if(Object.keys(updateData).length === 0) {
        response = await badRequest()
    } else {
        response = await ok(updateData)
    }

    return response
    
}

