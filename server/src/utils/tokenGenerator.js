import jwt from 'jsonwebtoken';

const tokenGenerator = (payload) => {
  const token = jwt.sign({
    name: payload.name,
    email: payload.email,
    uid: payload._id,
  }, process.env.JWT_SECRET, { expiresIn: '12h' });

  return token;
};

export default tokenGenerator;