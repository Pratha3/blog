const { Router } = require("express");
const { addblog, Home, createblog,showUpdateBlogForm , updateBlog, deleteBlog } = require("../controllers/user.controller");
const upload = require('../middleware/multer');
const router = Router();

router.get("/", Home);
router.get("/addblog", addblog);
router.post("/addblog", upload.single('blogImage'), createblog);
// Routes for updating blog
router.get("/updateblog/:id", showUpdateBlogForm);
router.post("/updateblog/:id", upload.single('blogImage'), updateBlog);

router.post("/deleteblog/:id", deleteBlog);

module.exports = router;
