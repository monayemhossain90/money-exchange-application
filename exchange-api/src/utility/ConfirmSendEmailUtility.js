const nodemailer = require('nodemailer');

const ConfirmSendEmailUtility= async (req, res) => {

    try{
        const email = req.body['email'];

        //transporter
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465, //false for 587
            secure: process.env.NODE_ENV === "production", // true for port 465, false for other ports
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD
            }
        })

	
	
       let mailOptions = {
        from: `Manually Money Exchange ${process.env.SMTP_FROM}`,
           to: email,
           subject: "Exchange Confirmation Email",
           html: `
           <b>We have completed your payment.</b>
            `
       };


	    const result = await transporter.sendMail(mailOptions);
        res.status(200).json({message:"success", data:result});
	}
	catch(e){
        res.status(500).json({message:"error", data:e.toString()});
	}

}
module.exports=ConfirmSendEmailUtility
