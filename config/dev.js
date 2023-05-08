require("dotenv").config()
module.exports={
    MONGOURI:`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.tyzulp1.mongodb.net/instagram-clone`,
    JWT_SECRET:process.env.JWT_SEC,
    SENDGRID_API:process.env.SENDGRID_API,
    EMAIL:process.env.EMAIL
}