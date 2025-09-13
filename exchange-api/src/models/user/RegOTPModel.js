const  mongoose=require('mongoose');
const RegOTPSchema= new mongoose.Schema(
    {
       email:{type:String},
       otp:{type:String},
       status:{type:Number,default:0},
    },
    { timestamps: true, versionKey:false},
);
const RegOTPModel=mongoose.model('regotps',RegOTPSchema);
module.exports=RegOTPModel
