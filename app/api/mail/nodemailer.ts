const  nodemailer = require( 'nodemailer');
const email = process.env.EMAIL; // generated ethereal user
const pass = process.env.EMAIL_PASSWORD;// generated ethereal password

export const transporter = nodemailer.createTransport({
    service: 'Yandex',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: email, // generated ethereal user
      pass: pass// generated ethereal password
    }
})

transporter.verify((err:any, success:any) => {
  if (err) console.error(err);
  console.log('Your config is correct');
  console.log(transporter.options.host);
});

export const mailOptions = {
    from: email,
    to: email
}