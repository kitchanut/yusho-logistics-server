const express = require("express");
const router = express.Router();
router.get("/post", (req, res) => {
  res.send("Hello Post!");
});

module.exports = router;
