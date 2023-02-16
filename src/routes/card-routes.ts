import { Router } from "express";
import {
  getCardsController,
  newCardController,
} from "../controllers/cards-controller";

const cardRoute = Router();

cardRoute.post("/cards", newCardController);
cardRoute.get("/cards", getCardsController);

export default cardRoute;
