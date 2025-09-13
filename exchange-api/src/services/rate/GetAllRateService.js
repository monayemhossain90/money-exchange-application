const GetAllRateService = async (req, res, RateModel) => {
    try{
        let data = await RateModel.aggregate([
            {$lookup: {from: "sendaccounts", localField: "sendAccountId", foreignField: "_id", as: "sendAccount"}},
            {$lookup: {from: "receiveaccounts", localField: "receiveAccountId", foreignField: "_id", as: "receiveAccount"}},
        ])


        res.status(200).json({message:"success", data:data})
    }
    catch(error) {
        res.status(500).json({message:"fail", data:error.toString()})
    }
}

module.exports=GetAllRateService