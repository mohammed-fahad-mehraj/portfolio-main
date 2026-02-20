import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Pool } from "pg";
import nodemailer from "nodemailer";

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// TEST ROUTE
app.get("/", (_, res) => {
  res.send("Backend running");
});

// CONTACT FORM ROUTE
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1️⃣ Save to DB
    await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    // 2️⃣ Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000
    });

    console.log("📧 Email sent successfully");


    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Error sending email", err);
    res.status(500).json({ success: false });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on ${port}`);
});
