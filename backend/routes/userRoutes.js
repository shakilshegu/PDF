import { Router } from "express";
import { register,getUsers,login} from "../controllers/userController.js"
import { authMiddleware} from "../Middleware/authMiddleware.js"
const router = Router()

router.post("/signup",register)
router.post("/getUser",authMiddleware,getUsers)
router.post("/login",login)

export default router;