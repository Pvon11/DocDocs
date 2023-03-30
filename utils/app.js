const nodemailer = require("nodemailer");

const html = `<p>Thank you for being a doctor using our app. We will provide quality
support that will enable you to have extensive access to your patient database.
Having an exceeding level of customizable ways to record your data will bring your
care for the patients to the next level. any issues reach out to this email.
</p>`;

async function hostEmail(newUserEmail) {
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.OUTLOOK_EMAIL,
      pass: process.env.OUTLOOK_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.OUTLOOK_EMAIL,
    to: newUserEmail,
    subject: "Welcome to DocDocs!",
    html: html,
  });
  console.log("Sent: " + info.messageId);
}

module.exports = hostEmail;
