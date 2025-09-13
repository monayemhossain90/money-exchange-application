const UserCreateService = require("../../services/user/UserCreateService");
const UserModel = require("../../models/user/UserModel");
const OTPModel = require("../../models/user/OTPModel");
const ResetTokenModel = require("../../models/user/ResetTokenModel");

const UserLoginService = require("../../services/user/UserLoginService");
const ApplyDoctorService = require("../../services/doctor/ApplyDoctorService");
const GetAllService = require("../../services/common/GetAllService");
const ForgotPasswordVerifyEmailService = require("../../services/ForgotPassword/ForgotPasswordVerifyEmailService");
const ForgotPasswordVerifyOtpService = require("../../services/ForgotPassword/ForgotPasswordVerifyOtpService");
const CreateNewPasswordService = require("../../services/ForgotPassword/CreateNewPasswordService");
const RecoverPasswordVerifyEmailService = require("../../services/RecoverPassword/RecoverPasswordVerifyEmailService");
const ResetPasswordService = require("../../services/RecoverPassword/ResetPasswordService");
const UpdateService = require("../../services/common/UpdateService");
const AdminLoginService = require("../../services/user/AdminLoginService");
const RemoveAdminService = require("../../services/user/RemoveAdminService");
const MakeAdminService = require("../../services/user/MakeAdminService");
const DeleteService = require("../../services/common/DeleteService");

exports.Registration = async (req, res) =>{
    await UserCreateService(req,res,UserModel);
}

exports.Login = async (req, res) =>{
    await UserLoginService(req,res,UserModel);
}

exports.AdminLogin=async(req,res)=>{
    await AdminLoginService(req,res,UserModel)
}


exports.ApplyDoctor = async (req, res) =>{
    await ApplyDoctorService(req,res,UserModel, DoctorModel);
}

exports.GetAllUser=async(req,res)=>{
    const projection = {$project: {_id:1, email:1, username:1, role:1}}
    await GetAllService(req,res,UserModel, projection)
}

exports.UpdateUser=async(req,res)=>{
    await UpdateService(req,res,UserModel)
}

exports.DeleteUser=async(req,res)=>{
    await DeleteService(req,res,UserModel)
}


exports.MakeAdmin=async(req,res)=>{
    await MakeAdminService(req,res,UserModel)
}

//remove admin
exports.RemoveAdmin=async(req,res)=>{
    await RemoveAdminService(req,res,UserModel)
}


//Step-01
exports.ForgotPasswordVerifyEmail=async (req,res)=>{
    await ForgotPasswordVerifyEmailService(req,res,UserModel)
}

//Step-02
exports.ForgotPasswordVerifyOTP=async (req,res)=>{
    await ForgotPasswordVerifyOtpService(req,res, OTPModel)
}

//Step-03
exports.CreateNewPassword=async (req,res)=>{
    await CreateNewPasswordService(req, res, UserModel,OTPModel)
}






//Recover Password
//Step-01//
exports.RecoverPasswordVerifyEmail=async (req,res)=>{
    await RecoverPasswordVerifyEmailService(req,res, UserModel)
}

//Step-02
exports.ResetPassword=async (req,res)=>{
    await ResetPasswordService(req,res,UserModel,ResetTokenModel)
}



