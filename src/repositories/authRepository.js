import pool from "../config/db.js";

export const validateLogin = async (email, password) => {
  const [rows] = await pool.query(
    "CALL ValidateAdminLogin(?, ?)",
    [email, password]
  );
  return rows[0];
};
