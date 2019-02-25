const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventName: { type: String, required: true },
    eventAddress: { type: String, required: true },
    eventDescription: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventTime: { type: String, require: true },
    postdate: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: "User" },
});

// This creates our model from the above schema, using mongoose's model method
var Event = mongoose.model("Event", EventSchema);

// Export the Article model
module.exports = Event;