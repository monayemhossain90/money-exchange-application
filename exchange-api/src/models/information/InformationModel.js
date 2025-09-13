const mongoose = require("mongoose");

const InformationSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "email is required"],
        },
        skype: {
            type: String,
            required: [true, "skype is required"]
        },
        whatsapp: {
            type: String,
            required: [true, "Whatsapp number is required"]
        },
        bkashAgent: {
            type: String,
            required: [true, "bkashAgent is required"]
        },
        nagadAgent: {
            type: String,
            required: [true, "nagadAgent is required"]
        },
        rocketAgent: {
            type: String,
            required: [true, "rocketAgent is required"]
        },
        cityBankAccountName: {
            type: String,
            required: [true, "cityBankAccountName is required"]
        },
        cityBankAccountNumber: {
            type: String,
            required: [true, "cityBankAccountNumber is required"]
        },
        bracBankAccountName: {
            type: String,
            required: [true, "bracBankAccountName is required"]
        },
        bracBankAccountNumber: {
            type: String,
            required: [true, "bracBankAccountNumber is required"]
        },
        dbblAccountName: {
            type: String,
            required: [true, "dbblAccountName is required"]
        },
        dbblAccountNumber: {
            type: String,
            required: [true, "dbblAccountNumber is required"]
        },
        wmzPurseId: {
            type: String,
            required: [true, "wmzPurseId is required"]
        },
        perfectUID: {
            type: String,
            required: [true, "perfectUID is required"]
        },
        payeerId: {
            type: String,
            required: [true, "payeerId is required"]
        },
        advCashUID: {
            type: String,
            required: [true, "advCashUID is required"]
        },
        tetherUSDT: {
            type: String,
            required: [true, "tetherUSDT is required"]
        }
    },
    { timestamps: true, versionKey:false}
)


const InformationModel = mongoose.model("information", InformationSchema);
module.exports = InformationModel