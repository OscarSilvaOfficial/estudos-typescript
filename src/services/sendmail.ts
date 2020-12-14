import env from '../utils/env'
import nodeMailer from 'nodemailer'


const mailServer = (host: string, port: number, secure: boolean = false) => {
  return nodeMailer.createTransport({
    host: host,
    port: port,
    secure: secure,
    auth: {
        user: env.EMAIL,
        pass: env.SENHA
    },
    tls: { rejectUnauthorized: false }
  });
}

export const sendMailService = () => {  
  const transporter = mailServer("smtp.gmail.com", 587)
  const mailOptions = {
    from: 'juniordevq@gmail.com',
    to: 'oscarkaka222@gmail.com',
    subject: 'E-mail enviado usando Node!',
    text: 'Bem fácil, não? ;)'
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if(error) {
        return error
    }
  }) 
  return "E-mail enviado"
}