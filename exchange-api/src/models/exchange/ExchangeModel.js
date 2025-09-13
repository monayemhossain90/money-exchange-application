const mongoose = require("mongoose");

const ExchangeSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users",
            required: [true, "sendAccountId is required"],
        },
        transactionOrBatch:{
            type: String,
            required: [true, "transactionOrBatch is required"],
        },
        email:{
            type: String,
            required: [true, "email is required"],
        },
        sendAccountId:{
            type:mongoose.Schema.Types.ObjectId,
            required: [true, "sendAccountId is required"],
        },
        receiveAccountId:{
            type:mongoose.Schema.Types.ObjectId,
            required: [true, "receiveAccountId is required"],
        },
        sendAmount: {
            type:String,
            required: [true, "sendAmount is required"],
        },
        receiveAmount: {
            type:String,
            required: [true, "receiveAmount is required"],
        },
        information: {
            type:Object,
            required: [true, "information is required"],
        },
        processType:{
            type:"String",
            default: "Manually"
        },
        status: {
            type: String,
            default: "Pending",
            enum: [
                "Pending",
                "Processing",
                "Cancelled",
                "Completed",
                "Timeout",
                "Denied",
                "Awaiting Payment",
                "Awaiting Confirmation"
            ],
        }
    },
    { timestamps: true, versionKey:false}
)


const ExchangeModel = mongoose.model("exchanges", ExchangeSchema);
module.exports = ExchangeModel