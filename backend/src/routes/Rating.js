const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
  res.json({
    message: "All route related to ratings rae here"
  })
})

module.exports = router;