const mongoose = require("mongoose");

const RateSchema = new mongoose.Schema(
    {
        sendAccountId:{
            type:mongoose.Schema.Types.ObjectId,
            required: [true, "sendAccountId is required"],
        },
        receiveAccountId:{
            type:mongoose.Schema.Types.ObjectId,
            required: [true, "receiveAccountId is required"],
        },
        unit: {
            type:String
        },
        current: {
            type:String
        }
    },

    { timestamps: true, versionKey:false}
)


const RateModel = mongoose.model("rate", RateSchema);

module.exports = RateModel