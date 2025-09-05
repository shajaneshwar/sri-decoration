import { loginAdmin } from "../services/authService.js";

export const login = async (req, res) => {
  try {
    const user = await loginAdmin(req.body.email, req.body.password);
    if (user.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    res.json({ success: true, user: user[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
