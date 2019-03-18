const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    ItemName: { type: String, required: true },
    ItemQtyReq: { type: Number, required: false },
    ItemQtyReqOutstanding: { type: Number, required: false },
    ItemQtyCommited: { type: Number, required: false },
    postdate: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    event: { type: Schema.Types.ObjectId, ref: "Event" },
    contributedTowardsItemReqId: { type: String, required: false }
});

// This creates our model from the above schema, using mongoose's model method
var Item = mongoose.model("Item", ItemSchema);

// Export the Article model
module.exports = Item;
