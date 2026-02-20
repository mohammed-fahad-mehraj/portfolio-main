import { pool } from "./db";
import { Express } from "express";

export function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
      await pool.query(
        `INSERT INTO contacts (name, email, phone, message)
         VALUES ($1, $2, $3, $4)`,
        [name, email, phone, message]
      );

      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false });
    }
  });
}
