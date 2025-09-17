import { Router } from "express";
// import { getPlayerController } from "./controllers/player-controller";
import * as controller from "./controllers/player-controller"

const router = Router();

//Rota e controller
router.get('/players', controller.getPlayerController)
router.post("/players", controller.postPlayerController)
router.delete("/players/:id", controller.deletePlayerController)
router.patch("/players/:id", controller.updatePlayerController)
router.get("/players/:id", controller.getPlayerByIdController)

export default router;