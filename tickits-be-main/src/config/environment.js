module.exports = {
  host: process.env.DB_HOST,
  db: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  serverPort: process.env.SERVER_PORT,
  jwtSecret: process.env.JWT_SECRET_KEY,
  cloudinaryName: process.env.CLOUDINARY_NAME,
  cloudinaryKey: process.env.CLOUDINARY_KEY,
  cloudinarySecret: process.env.CLOUDINARY_SECRET,
};
