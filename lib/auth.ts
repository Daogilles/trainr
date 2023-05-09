import { hash, compare } from "bcryptjs";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export function isEmailValid(email: string): Boolean {
  return emailRegex.test(email);
}

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
