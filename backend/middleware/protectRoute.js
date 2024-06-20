import jwt from  'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        // Extract JWT token from request cookies
        const token = req.cookies.jwt;

        // Check if token exists
        if (!token) {
            return res.status(401).json({error: "Unauthorized - No Token Provided"});
            
        }

        // Verify JWT token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

         // Check if token is valid
        if (!decoded) {
            return res.status(401).json({error: "Unauthorized - Invalid Token"});
            
        }

        // Find user by user ID extracted from the token
        const user  = await User.findById(decoded.userId).select("-password" );

        // Check if user exists
        if (!user) {
            return  res.status(401).json({ error: "User not found" });
        }

        req.user = user;
        
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({error:"Internal server error"});
    }
};

export default  protectRoute;