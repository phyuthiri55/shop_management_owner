import { Router } from "express";
import { shopController } from "../../../../../container/shop/shop.container";

const router = Router();

router.post('/',shopController.create.bind(shopController));

export default router;