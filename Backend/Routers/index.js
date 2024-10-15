// const express = require("express")

// const router = express.Router()

// const authRoute = require("./auth")
// const storyRoute = require("./story")
// const userRoute = require("./user")
// const commentRoute = require("./comment")

// router.use("/auth",authRoute)
// router.use("/story",storyRoute)
// router.use("/user",userRoute)
// router.use("/comment",commentRoute)


// module.exports = router


const express = require("express");

const router = express.Router();

const authRoute = require("./auth");
const storyRoute = require("./story");
const userRoute = require("./user");
const commentRoute = require("./comment");

// Define a root route
router.get("/", (req, res) => {
    res.send("Welcome to the API!"); // or any other welcome message
});

router.use("/auth", authRoute);
router.use("/story", storyRoute);
router.use("/user", userRoute);
router.use("/comment", commentRoute);

module.exports = router;
