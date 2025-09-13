const ReceiveAccountModel = require("../../models/account/ReceiveAccountModel");
const DetailsService = require("../../services/common/DetailsService");
const GetAllService = require("../../services/common/GetAllService");
const AccountCreateService = require("../../services/account/AccountCreateService");
const UpdateService = require("../../services/common/UpdateService");


exports.CreateReceiveAccount=async (req, res) => {
    await AccountCreateService(req,res,ReceiveAccountModel);
}

exports.UpdateReceiveAccount=async(req,res)=>{
    await UpdateService(req,res,ReceiveAccountModel)
}

exports.GetReceiveAccount=async (req, res) => {
    await DetailsService(req, res, ReceiveAccountModel);
}

exports.GetAllReceiveAccount=async(req,res)=>{
    let Projection = {$project:{_id:1, name:1, reserved:1, hidden:1}};
    await GetAllService(req, res, ReceiveAccountModel,Projection)
}
