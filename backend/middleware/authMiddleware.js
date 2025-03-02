import  jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

//Protect routes
 const protect = asyncHandler(async (req, res, next) => {
    let token;
    //Read the JWT From the cookie
    token = req.cookies.jwt;

    if (token)
 {
    try{
        const decoded= jwt.verify(token , process.env.JWT_SECRET);
       req.user=   await User.findById(decoded.userId).select('-password')

       console.log("Decoded User:", decoded);
       console.log("User in Protect Middleware:", req.user); // Log to check if isAdmin exists

       next();
    } catch (error){
       console.log(error)
        res.status(401);
        throw new Error('Not Authorized ,token failed ')
    }
 } else {
    res.status(401);
    throw new Error('Not Authorized , no token')
 }

})


//Admin middleware 
const admin = (req,res,next)=>{
    if (req.user && req.user.isAdmin){

        next()
    }else {
        res.status(401);
        throw new Error('Not authorized as Admin')
        console.log(error)
    }
} 
export { protect , admin}