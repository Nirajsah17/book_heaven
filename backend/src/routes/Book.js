const express = require("express");
const router = express.Router();
const books = require("../controllers/BookController");
const requireAuth = require("../middlewares/authMiddleware");

router.post("/getAll", requireAuth, books.getAllBook );
router.post("/pagination", requireAuth, books.getPaginatedItem);
router.post("/search", requireAuth, books.searchBook);
router.post("/filter", requireAuth, books.filterBooks);

module.exports = router;