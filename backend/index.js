const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

console.log("Environment Variables:", process.env);
console.log("Loaded PORT:", process.env.PORT);


const path = require('path')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const postRoute = require('./routes/post')
const commentRoute = require('./routes/Comments')

const cors = require('cors')
const multer = require('multer')
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/comments", commentRoute)

//upload images
const storage = multer.diskStorage({
    destination: (req, file, fn) => {
        fn(null, "images")
    },
    filename: (req, file, fn) => {
        fn(null, req.body.img)
    }
})
const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("Image uploaded successfully")
})

const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.h9iqt.mongodb.net/blog')
        console.log("database is connected successfully");
    } catch (err) {
        console.log(err)
    }
}

app.listen(process.env.PORT, () => {
    ConnectDB();
    console.log("App is running on port:", process.env.PORT);
})
