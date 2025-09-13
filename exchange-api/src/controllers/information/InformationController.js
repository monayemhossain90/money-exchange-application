const InformationModel = require("../../models/information/InformationModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const GetInformationService = require("../../services/information/GetInformationService");



exports.CreateInformation=async (req, res) => {
    await CreateService(req,res,InformationModel);
}


exports.UpdateInformation=async(req,res)=>{
    await UpdateService(req,res,InformationModel)
}

exports.GetInformation=async (req, res) => {
    await GetInformationService(req,res,InformationModel)
}
