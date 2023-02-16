import { Response, Request } from "express";
import {
  getCardsRepository,
  newCardRepository,
} from "../repositories/cards-repository";

export async function newCardController(request: Request, response: Response) {
  const data = request.body;

  try {
    const card = await newCardRepository(data);

    response.status(201).json(card);
  } catch (error) {
    response.status(400).json(error);
  }
}

export async function getCardsController(request: Request, response: Response) {
  try {
    const cards = await getCardsRepository();

    response.status(200).json(cards);
  } catch (error) {
    response.status(400).json(error);
  }
}
