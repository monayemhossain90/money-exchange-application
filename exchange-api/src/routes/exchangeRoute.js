const express =require('express');
const ExchangeController = require("../controllers/exchange/ExchangeController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");

const router = express.Router();


router.post('/create-exchange',AuthVerifyMiddleware, ExchangeController.CreateExchange);
router.get('/get-user-exchanges',AuthVerifyMiddleware, ExchangeController.GetUserExchanges);
router.get('/get-all-exchange',AuthVerifyMiddleware, ExchangeController.GetAllExchange);
router.get('/get-exchange/:id',AuthVerifyMiddleware, ExchangeController.GetExchange);
router.get('/get-completed-exchanges',AuthVerifyMiddleware, ExchangeController.GetCompletedExchanges);
router.get('/get-recent-completed-exchanges', ExchangeController.GetRecentCompletedExchanges);
router.post('/send-exchange-confirm-email',AuthVerifyMiddleware, IsAdmin, ExchangeController.SendExchangeConfirmEmail);
router.put('/update-exchange-status/:id',AuthVerifyMiddleware, IsAdmin, ExchangeController.UpdateExchangeStatus);



module.exports=router;

