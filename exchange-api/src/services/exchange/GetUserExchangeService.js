const mongoose = require("mongoose");
const GetUserExchangeService = async (req, res, ExchangeModel) => {
  try{
      let id = req.headers.id;
      const ObjectId = mongoose.Types.ObjectId;
      let QueryObject = {userId: new ObjectId(id)};

      let data = await ExchangeModel.aggregate([
          {$match: QueryObject},
          {$sort : { createdAt: -1 }},
          {$lookup: {from: "sendaccounts", localField: "sendAccountId", foreignField: "_id", as: "sendAccount"}},
          {$lookup: {from: "receiveaccounts", localField: "receiveAccountId", foreignField: "_id", as: "receiveAccount"}}
      ]);

      res.status(200).json({message:"success", data:data})
  }
  catch(error){
      res.status(500).json({message:"fail", data:error.toString()})
  }
}

module.exports=GetUserExchangeService