import express from 'express';
const router = express.Router();
// import products from '../data/product.js'
import {authUser,registerUser,logooutUser,getUserProfile,updateUserProfile,getUsers,deleteUser,getUserById,updateUser} from '../controllers/userController.js'
import { protect,admin } from '../middleware/authMiddleware.js';



router.route('/').post(registerUser).get(protect,admin,getUsers);
router.post('/logout',logooutUser);
router.post('/auth',authUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);
router.route('/:id').delete(protect ,admin ,deleteUser).get(protect ,admin ,getUserById).put(protect ,admin ,updateUser);

    

export default router