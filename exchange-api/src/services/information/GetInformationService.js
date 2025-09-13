const GetInformationService = async (req, res, InformationModel) => {
    try{
        let  data = await InformationModel.aggregate([
            {$project:{_id:1, email:1, skype:1, whatsapp:1, bkashAgent:1, nagadAgent:1, rocketAgent:1, cityBankAccountName:1, cityBankAccountNumber:1, bracBankAccountName:1, bracBankAccountNumber:1, dbblAccountName:1, dbblAccountNumber:1, wmzPurseId:1, perfectUID:1, payeerId:1, advCashUID:1, tetherUSDT:1}}
        ]);
        res.status(200).json({message: "success", data: data[0]});
    }
    catch(error){
        res.status(500).json({message: "error", data: error.toString()});
    }
}

module.exports=GetInformationService;