const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const cardSchema = new Schema(
    {
      name: {
        type: String,
        trim: true,
        required: false,
        unique: true
      },
      description: {
        type: String,
        trim: true
      },
      rarity: {
        type: String,
        trim: true,
      },
      noSeries: {
        type: String,
        trim: true,
      },
      language: {
        type: String,
        trim: true,
      },
      image: {
        type: String,
        required: true
      },
      user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }]
      


    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`    
      timestamps: true
    }
  );
  
  const Card = model("Card", cardSchema);
  
  module.exports = Card;