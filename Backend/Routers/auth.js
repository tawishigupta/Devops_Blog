const express = require("express")

const {register,login,forgotpassword,resetpassword,getPrivateData} = require("../Controllers/auth");

const { getAccessToRoute } = require("../Middlewares/Authorization/auth");

const router = express.Router() ;


router.post("/register",register)

router.post("/login",login)

router.post("/forgotpassword",forgotpassword)

router.put("/resetpassword",resetpassword)

router.get("/private",getAccessToRoute,getPrivateData)


module.exports = router


// const express = require("express");
// const {
//     addStory,
//     getAllStories,
//     detailStory,
//     likeStory,
//     editStoryPage,
//     editStory,
//     deleteStory,
// } = require("../Controllers/story");
// const { getAccessToRoute } = require("../Middlewares/Authorization/auth");

// const router = express.Router();

// // Public route to get all stories
// router.get("/stories", getAllStories); // No auth required
// router.get("/stories/:slug", detailStory); // Public route to get story details

<<<<<<< HEAD

=======
>>>>>>> 497d827f36ba3642652c48be356e210c7c401d00
// // Protected routes for story management
// router.post("/stories", getAccessToRoute, addStory); // Auth required
// router.put("/stories/:slug", getAccessToRoute, editStory); // Auth required
// router.delete("/stories/:slug", getAccessToRoute, deleteStory); // Auth required

// // Like a story (assuming users must be authenticated to like)
// router.post("/stories/:slug/like", getAccessToRoute, likeStory); // Auth required

// module.exports = router;
