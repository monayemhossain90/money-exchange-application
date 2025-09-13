const express =require('express');
const SendAccountController = require("../controllers/account/SendAccountController");
const ReceiveAccountController = require("../controllers/account/ReceiveAccountController");

const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();



//Send-Account
router.post('/create-send-account', AuthVerifyMiddleware, IsAdmin, SendAccountController.CreateSendAccount);
router.get("/get-all-send-account", SendAccountController.GetAllSendAccount);
router.get('/get-send-account/:id', SendAccountController.GetSendAccount);
router.put('/update-send-account/:id',AuthVerifyMiddleware, IsAdmin, SendAccountController.UpdateSendAccount);



//Receive-Account
router.post('/create-receive-account', AuthVerifyMiddleware, IsAdmin, ReceiveAccountController.CreateReceiveAccount);
router.get("/get-all-receive-account", ReceiveAccountController.GetAllReceiveAccount);
router.get('/get-receive-account/:id', ReceiveAccountController.GetReceiveAccount);
router.put('/update-receive-account/:id',AuthVerifyMiddleware, IsAdmin, ReceiveAccountController.UpdateReceiveAccount);



module.exports=router;

