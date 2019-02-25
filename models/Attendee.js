const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendeeSchema = new Schema({
    host: { type: Boolean, default: false },
    RSVPdate: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    event: { type: Schema.Types.ObjectId, ref: "Event" },
    eventStatus: { type: String, required: true, default: "active" }
});


// AttendeeSchema.methods.updateAllRecords = function (CancelledEventId) {
//     console.log(`in the updateAllRecrds func in Attendee model with ${CancelledEventId}`)
//     return updateMany({
//         event: CancelledEventId
//     },
//         { $set: { eventStatus: "cancelled" } })
// };


// This creates our model from the above schema, using mongoose's model method
var Attendee = mongoose.model("Attendee", AttendeeSchema);

// Export the Article model
module.exports = Attendee;