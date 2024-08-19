const Card = require("../models/card");
const mongoose = require("mongoose");

const AddCard = async (req,res) => {
    try {
        const cards = await Card.find({});
        const {title,description} = req.body;
        const newCard = await Card.create({id:String(cards.length+1),title,description});
        console.log("card new:",newCard);
        if(!newCard){
            return res.status(501).json("Error creating a card in the database!");
        }
        res.status(200).json({message:"Card created successfully!",cardData: newCard});
    } catch (error) {
        console.error("Error creating card:", error);
        res.status(500).json("Internal server error!");
    }
}

const GetCardById = async (req,res) => {
    const c_id = req.params.id;
    try {
        const card = await Card.findOne({id :c_id});
        if(!card){
            return res.status(501).json("Error retrieving card from the database!");
        }
        res.status(200).json(card);
    } catch (error) {
        console.error("Error creating card:", error);
        res.status(500).json("Internal server error!");
    }
}

const GetAllCards = async (req,res) => {
    try {
        const cards = await Card.find({});
        if(!cards){
            return res.status(501).json("Error getting cards from the database!");
        }
        res.status(200).json(cards);
    } catch (error) {
        console.error("Error creating card:", error);
        res.status(500).json("Internal server error!");
    }
}

module.exports = {AddCard,GetAllCards,GetCardById};