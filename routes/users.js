var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add-users', async function(req, res, next) {
  try{
    console.log(req.body);
    await sendMail();
    res.send(req.body)
  }
  catch(error){
    console.log(error);
  }
  
})


async function sendMail() {

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    name:"ethereal.com",
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'cayla.kerluke44@ethereal.email',
        pass: '7u1nGgttcvtr4rHrXJ'
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    
    from: 'parthkoshta3@gmail.com', // sender address
    to: "honey.parth@gmail.com, parth.k@theghack.in", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = router;
