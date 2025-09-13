const mongoose = require("mongoose");

const CreateRateService = async (req, res, RateModel) => {

    try {
        const sendAccountId = req.body['sendAccountId'];
        const receiveAccountId = req.body['receiveAccountId'];
        const unit = req.body['unit'];
        const current = req.body['current'];
        const ObjectId = mongoose.Types.ObjectId;
        const PostBody = {
            sendAccountId,
            receiveAccountId,
            unit,
            current
        }

        //First-Database-Process//get-data
        const rateCount = await RateModel.aggregate([
            {$match: {sendAccountId: new ObjectId(sendAccountId), receiveAccountId: new ObjectId(receiveAccountId)}}
        ]);


        if (rateCount.length === 0) {
            const data = await RateModel.create(PostBody);
            res.status(200).json({message: "success", data:data});
        }
        else {
            res.status(409).json({message: "fail", data: "already rate created"});
       }
    }
    catch(error){
        res.status(500).json({message: "error", data: error.toString()});
    }

}

module.exports = CreateRateService;