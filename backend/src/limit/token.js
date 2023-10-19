import { SignJWT, jwtVerify } from "jose";

export const createToken = async (user) => {
    const id = user._id.toString();
    const rol = user.rol;
    const jwtConstructor = await new SignJWT({ id: id, rol: rol })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(Buffer.from(process.env.JWT_PRIVATE_KEY, 'utf-8'));

    return jwtConstructor;
}


export const verifyTokenMiddleware = async (req, res, next) => {
    if (!req.cookies || !req.cookies.jwt) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    const token = req.cookies.jwt;
    const key = Buffer.from(process.env.JWT_PRIVATE_KEY, 'utf-8');
  
    try {
      const user = await jwtVerify(token, key);
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };