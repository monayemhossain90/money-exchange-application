const ExchangeCreateService= async (req,res,DataModel) => {
    try{
        const id = req.headers.id;
        let PostBody = req.body;
        PostBody.userId=id;
        let data = await DataModel.create(PostBody)
        res.status(200).json({message: "success", data: data});
    }
    catch (error) {
        res.status(500).json({message: "error", data: error.toString()});
    }
}

module.exports=ExchangeCreateService
