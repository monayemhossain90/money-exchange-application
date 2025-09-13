const hashedPassword = require("../../utility/hashedPassword");
const UserCreateService= async (req,res,DataModel) => {
   try{
      let reqBody=req.body;
      let existingUserName = await DataModel.aggregate([{$match:{username: reqBody['username']}}]);
      let existingEmail = await DataModel.aggregate([{$match:{email: reqBody['email']}}]);

      if(existingUserName.length === 0){
          if(existingEmail.length ===0){
               reqBody.password = await hashedPassword(reqBody.password);//hashedPassword
               let data = await DataModel.create(reqBody)
               res.status(201).json({message: "success", result:data});
          }
          else{
            res.status(409).json({message: "fail", result:"Email Already Exist"});
          }
      }else{
          res.status(409).json({message: "fail", result:"Username Already Exist"});
      }
   }
   catch (error) {
      res.status(500).json({ message: "error", data:error.toString()});
   }
}
module.exports=UserCreateService