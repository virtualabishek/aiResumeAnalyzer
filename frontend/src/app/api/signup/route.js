import db from "../../db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed, use POST." });
  }

  const { first_name, last_name, email, phone, profession, password } =
    req.body;
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `INSERT INTO user (first_name, last_name, email, phone, profession, password) 
                   VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [
      first_name,
      last_name,
      email,
      phone || "",
      profession || "",
      hashedPassword,
    ];
    await db.execute(query, values);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ error: "Email already exists" });
    }
    console.error("Signup error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
