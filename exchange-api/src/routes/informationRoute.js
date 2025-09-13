const express =require('express');
const InformationController = require("../controllers/information/InformationController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();



router.post('/create-information', AuthVerifyMiddleware, IsAdmin, InformationController.CreateInformation);
router.put('/update-information/:id', AuthVerifyMiddleware, IsAdmin, InformationController.UpdateInformation);
router.get('/get-information', InformationController.GetInformation);





module.exports=router;

