const CustomError = require("../../Helpers/error/CustomError");
const User = require("../../Models/user")
const jwt = require("jsonwebtoken");
const asyncErrorWrapper =require("express-async-handler")
const { isTokenIncluded ,getAccessTokenFromHeader} = require("../../Helpers/auth/tokenHelpers");

const getAccessToRoute = asyncErrorWrapper(async (req, res, next) => {
    const { JWT_SECRET_KEY } = process.env;

    // Check if the token is included in the request
    if (!isTokenIncluded(req)) {
        // Allow access to public routes without a token
        return next();  // Call next() to allow access to public routes
    }

    const accessToken = getAccessTokenFromHeader(req);

    try {
        // Verify the token
        const decoded = jwt.verify(accessToken, JWT_SECRET_KEY);
        const user = await User.findById(decoded.id);

        if (!user) {
            return next(new CustomError("User not found. You are not authorized.", 401));
        }

        req.user = user;
        next(); // Call next() to proceed to the protected route
    } catch (error) {
        return next(new CustomError("Invalid or expired token. Please log in again.", 401));
    }
});



module.exports ={getAccessToRoute}