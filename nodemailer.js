import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

let userEmail = document.getElementById("contacto-email");
let userSubject = document.getElementById("contacto-asunto");
let userMessage = document.getElementById("contacto-mensaje");
let userBtn = document.getElementById("contacto-btn");


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASS
  } 
});


const mailOptions = {
  from: userEmail,
  to: process.env.MAIL,
  subject: userSubject,
  text: userMessage
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
 console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    // do something useful
  }
});




