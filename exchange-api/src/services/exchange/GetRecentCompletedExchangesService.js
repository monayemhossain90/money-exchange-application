const GetRecentCompletedExchangesService = async (req, res, ExchangeModel) => {
  try {

      let data = await ExchangeModel.aggregate([
          {$match: {status: "Completed"}},
          {$sort : { createdAt: -1 }},
          {$limit: 10},
          {$lookup: {from: "sendaccounts", localField: "sendAccountId", foreignField: "_id", as: "sendAccount"}},
          {
              $lookup: {
                  from: "receiveaccounts",
                  localField: "receiveAccountId",
                  foreignField: "_id",
                  as: "receiveAccount"
              }
          },
          {$lookup: {from: "users", localField: "userId", foreignField: "_id", as: "user"}}
      ])

      res.status(200).json({message: "success", data: data})
   }
   catch(e){
       res.status(500).json({message:"error", data:error.toString()})
   }
}

module.exports=GetRecentCompletedExchangesService