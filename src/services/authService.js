import { validateLogin } from "../repositories/authRepository.js";

export const loginAdmin = async (email, password) => {
  return await validateLogin(email, password);
};
