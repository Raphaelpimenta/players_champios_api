import { findAllClubs } from "../repositories/club-repository"
import { ok } from "../utils/http-helper"

export const getClubService = async () => {
    const data = await findAllClubs()
    const response = ok(data)
    return response
}