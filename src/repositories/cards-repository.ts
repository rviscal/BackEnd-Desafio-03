import { Cards } from "@prisma/client";
import { prisma } from "../database";

type DataDto = Omit<Cards, "id">;

export async function newCardRepository(data: DataDto) {
  const card = await prisma.cards.create({ data });

  return card;
}

export async function getCardsRepository() {
  const cards = await prisma.cards.findMany();

  return cards;
}
