const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const offerSchema = new Schema(
    {
      card: {
        type: ObjectId,
        trim: true,
        required: false,
      },
      seller: {
        type: ObjectId,
        trim: true
      },
      quantity: {
        type: Number,
        trim: true,
        required: true
      },
      price: {
        type: Number,
        trim: true,
        required: true
      },      
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`    
      timestamps: true
    }
  );
  
  const Offer = model("Offer", offerSchema);
  
  module.exports = Offer;