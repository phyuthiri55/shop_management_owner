import { Router } from "express";
import shopRouter from "../shop/shop.route";
import authRouter from "../owner/owner.route";


const router = Router();

router.use("/auth",authRouter);
router.use('/shops',shopRouter);

export default router;