import jwt  from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .send({ message: "Authorization token missing", success: false });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Auth failed", success: false });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res
      .status(401)
      .send({ message: "Auth error failed", success: false, error });
  }
};

export default authMiddleware