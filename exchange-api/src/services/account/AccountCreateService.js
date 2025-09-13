const AccountCreateService = async (req, res, AccountModel) => {
  try{
    let reqBody=req.body;
    let existingAccount = await AccountModel.aggregate([{$match:{name: reqBody['name']}}]);
    if(existingAccount.length === 0){
        let data = await AccountModel.create(reqBody)
        res.status(201).json({message: "success", data:data});
     }
     else{
         res.status(409).json({message: "fail", data:"This account is Already Existed"});
     }
  }
  catch(error){
    res.status(500).json({ message: "error", data:error});
  }
}


module.exports= AccountCreateService