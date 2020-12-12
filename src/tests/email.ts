const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "juniordevq@gmail.com",
        pass: "KAka25780"
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
    from: 'juniordevq@gmail.com',
    to: 'oscarkaka222@gmail.com',
    subject: 'E-mail enviado usando Node!',
    text: 'Bem fácil, não? ;)'
  };

transporter.sendMail(mailOptions, function(error: any, info: any){
    if(error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});