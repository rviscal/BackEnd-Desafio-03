import { Router } from "express";
import cardRoute from "./card-routes";

const router = Router();

router.use(cardRoute);

export default router;
