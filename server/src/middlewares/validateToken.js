import jwt from 'jsonwebtoken';

const validateToken = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).json({ message: "Access denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = structuredClone(decoded);
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}

export default validateToken;