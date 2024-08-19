const express = require("express");
const router = express.Router();
const { GetAllCards, AddCard, GetCardById } = require("../controllers/cardControllers");

router.get("/get/cards",GetAllCards);
router.get("/get/card/:id",GetCardById);
router.post("/post/cards",AddCard);

module.exports = router;