const mongoose = require("mongoose");
const GetExchangeService = async (req, res, ExchangeModel) => {
    try{
        let id = req.params.id;
        const ObjectId = mongoose.Types.ObjectId;
        let QueryObject = {_id: new ObjectId(id)};

        let data = await ExchangeModel.aggregate([
            {$match: QueryObject},
            {$lookup: {from: "sendaccounts", localField: "sendAccountId", foreignField: "_id", as: "sendAccount"}},
            {$lookup: {from: "receiveaccounts", localField: "receiveAccountId", foreignField: "_id", as: "receiveAccount"}},
             {$lookup: {from: "users", localField: "userId", foreignField: "_id", as: "user"}}
        ])


        res.status(200).json({message:"success", data:data[0]})
    }
    catch(error){
        res.status(500).json({message:"error", data:error.toString()})
    }
}

module.exports=GetExchangeService