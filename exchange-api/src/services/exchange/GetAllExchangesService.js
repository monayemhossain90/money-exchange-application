const GetAllExchangesService = async (req, res, ExchangeModel) => {
    try{
        let data = await ExchangeModel.aggregate([
            // {$match: {$or: [
            //             {status: 'Pending' },
            //             {status: 'Denied'},
            //             {status: 'Processing'},
            //             {status: 'Cancelled'},
            //             {status: 'Timeout'},
            //             {status: 'Awaiting Payment'},
            //             {status: 'Awaiting Confirmation'},
            //         ]}
            // },
            {$match: {status: {$ne: 'Completed'}}}, //without Completed exchange
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

module.exports=GetAllExchangesService