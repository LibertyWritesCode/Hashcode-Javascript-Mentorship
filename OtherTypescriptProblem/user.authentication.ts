/*

You are developing a web application that requires a user authentication system. 
The system should provide the following functionalities: sign up, log in, log out, and password reset. 
The authentication system should use JSON Web Tokens (JWT) for session management.

Requirements:

Sign Up:

Users should be able to create an account by providing their email and password.
The system should validate that the email is unique and the password meets security requirements (e.g., minimum length, containing at least one uppercase letter and one number).
Log In:

Users should be able to log in using their email and password.
Upon successful authentication, the system should return a JWT token that will be used for subsequent authenticated requests.
Log Out:

Authenticated users should be able to log out, which invalidates their JWT token.
Password Reset:

Users should be able to request a password reset by providing their email.
The system should generate a secure password reset token and send an email with a link to reset the password.
Users should be able to reset their password by clicking on the link and providing a new password.

*/

// Import necessary libraries and dependencies
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

// Set up express app
const app = express();
app.use(express.json());

// Replace these values with your own secret key and email configuration
const jwtSecret = "your-secret-key";
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// User data (replace this with a real database in production)
interface User {
  email: string;
  passwordHash: string;
}

const users: User[] = [];

// Helper function to generate JWT token
function generateToken(email: string): string {
  return jwt.sign({ email }, jwtSecret, { expiresIn: "1h" });
}

// Sign Up
app.post("/signup", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if the email already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).json({ message: "Email already registered" });
  }

  // Validate password complexity
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long and contain at least one letter and one number",
    });
  }

  // Hash the password and store the user in the database
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const newUser: User = { email, passwordHash };
  users.push(newUser);

  return res.status(201).json({ message: "User created successfully" });
});

// Log In
app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Check if the provided password matches the stored hash
  const passwordMatch = await bcrypt.compare(password, user.passwordHash);
  if (!passwordMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate and send the JWT token
  const token = generateToken(email);
  return res.json({ token });
});

// Log Out (not implemented as JWTs are stateless)

// Password Reset
app.post("/password/reset", (req: Request, res: Response) => {
  const { email } = req.body;

  // Check if the user exists
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Generate a secure password reset token
  const resetToken = jwt.sign({ email }, jwtSecret, { expiresIn: "15m" });

  // Send the password reset link via email (replace with your email template and URL)
  const resetLink = `http://your-website.com/reset-password?token=${resetToken}`;
  transporter.sendMail({
    to: email,
    subject: "Password Reset",
    html: `Click on the following link to reset your password: <a href="${resetLink}">${resetLink}</a>`,
  });

  return res.json({ message: "Password reset email sent" });
});

// Password Reset Confirmation
app.post("/password/reset/confirm", async (req: Request, res: Response) => {
  const { token, newPassword } = req.body;

  try {
    // Verify the token and extract the email
    const { email } = jwt.verify(token, jwtSecret);

    // Find the user with the email
    const user = users.find((u) => u.email === email);

