const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
  
    if (!authorization || authorization !== "Bearer my-secret-token") {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    next();
  };
  
  export default authMiddleware;
  