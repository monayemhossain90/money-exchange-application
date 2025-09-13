const express =require('express');
const RateController = require("../controllers/rate/RateController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");




const router = express.Router();



router.post('/create-rate',  AuthVerifyMiddleware, IsAdmin, RateController.CreateRate);
router.post('/get-rate', RateController.GetRate);
router.get('/get-all-rate', RateController.GetAllRate);
router.put('/update-rate/:id',AuthVerifyMiddleware, IsAdmin, RateController.UpdateRate);




module.exports=router;

