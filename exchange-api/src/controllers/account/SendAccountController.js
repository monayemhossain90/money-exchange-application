const SendAccountModel = require("../../models/account/SendAccountModel");
const GetAllService = require("../../services/common/GetAllService");
const AccountCreateService = require("../../services/account/AccountCreateService");
const DetailsService = require("../../services/common/DetailsService");
const UpdateService = require("../../services/common/UpdateService");


exports.CreateSendAccount=async (req, res) => {
    await AccountCreateService(req,res,SendAccountModel);
}

exports.UpdateSendAccount=async(req,res)=>{
    await UpdateService(req,res,SendAccountModel)
}


exports.GetSendAccount=async (req, res) => {
    await DetailsService(req, res, SendAccountModel);
}

exports.GetAllSendAccount=async(req,res)=>{
    let Projection = {$project:{_id:1, name:1,minimum:1, hidden:1}};
    await GetAllService(req, res, SendAccountModel,Projection)
}
