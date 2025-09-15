import express from "express"
import { userRegistration, verifyEmail, login, logout} from "../controllers/userRegistration.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { addWatchlist, getWatchlist, removeFromWatchlist } from "../controllers/watchlist.controller.js";
import { loginState } from "../controllers/loginState.controller.js";
import { profileInformation } from "../controllers/profile.controller.js";




const router = express.Router();


router.post("/register", userRegistration);
router.get("/verify/:token", verifyEmail)
router.post("/login", login);
router.post("/logout",authMiddleware,logout);
router.post("/movielist",authMiddleware, addWatchlist);
router.get("/movielist",authMiddleware, getWatchlist)
router.delete("/movielist/:movieId",authMiddleware, removeFromWatchlist)
router.get("/profile", authMiddleware, profileInformation)
router.get("/globalState", authMiddleware, loginState)


export default router;