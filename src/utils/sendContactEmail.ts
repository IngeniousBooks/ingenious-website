import { UserContactData } from "@/actions/generateContactEmail";
import "dotenv/config";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

export default async function sendContactEmail(
  userContactData: UserContactData
) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Ingenious Team" <team@ingenious-books.com>',
    to: `${userContactData.email}hjhkhk`, // list of receivers
    subject: "Received: Ingenious Contact Form", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  const response = Object.keys(info);

  response.forEach((responseKey) => {
    console.log(`${responseKey}: ${info[responseKey]}`);
  });
  // console.log("Message sent: %s", Object.keys(info));
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}
