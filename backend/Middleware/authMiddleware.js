import Jwt  from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .send({ message: "Authorization token missing", success: false });
    }
    console.log("kooooi");
    Jwt.verify(token,process.env.SECRET_KEY,(err,decoded) =>{
        if (err) {
            return res.status(401).send({ message: "Auth failed", success: false });
          } else {
            console.log(decoded.id);
            req.userId = decoded.id;

            next();
          }
    })
  } catch (error) {
    return res
      .status(401)
      .send({ message: "Auth error failed", success: false, error });
  }
};

export {authMiddleware}