function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    function adminMiddleware(req, res, next) {
        // Implement admin auth logic
        // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
        const token = req.header.authorization;
        const words = token.split(" ");
        const jwtToken = words[1];
        const decodedValue = jwt.verify(jwtToken, secret);
    
        if(decodedValue.username){
            next();
        } else{
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    
    }
  
}

module.exports = userMiddleware;