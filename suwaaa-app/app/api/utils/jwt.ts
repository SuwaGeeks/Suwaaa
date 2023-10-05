import { SignJWT, jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode('secret');

const createToken = async (
  email: string
): Promise<string> => {
  const payload = {
    email: email,
  };
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('30d')
    .sign(SECRET);
  return token;
};

const checkToken = async (
  token: string
): Promise<boolean | string> => {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return typeof payload === 'string'
      ? payload
      : String(payload.email);
  } catch (e) {
    return false;
  }
};

export { createToken, checkToken };
