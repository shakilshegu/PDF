import { Router } from "express";
import { register,getUsers,login} from "../controllers/userController.js"

const router = Router()

router.post("/signup",register)
router.get("/signup",getUsers)
router.post("/login",login)

export default router;