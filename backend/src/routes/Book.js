const express = require("express");
const router = express.Router();
const books = require("../controllers/BookController")

// router.get("/", (req, res)=>{
//   res.json({
//     message: "All books related routes are here"
//   })
// });

router.get("/getAll", books.getAllBook );
router.get("/pagination", books.getPaginatedItem);
router.get("/search", books.searchBook);
router.get("/filter", books.filterBooks);

module.exports = router;