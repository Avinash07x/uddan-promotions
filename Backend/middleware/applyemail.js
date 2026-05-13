import nodemailer from "nodemailer";

const transporter =
  nodemailer.createTransport({
    service: "gmail",

    auth: {
      user:
        "itsavinash0@gmail.com",

      pass:
        "qefkufkfitxycqly",
    },
  });

const applyemail = async ({
  to,
  subject,
  html,
}) => {
  await transporter.sendMail({
    from: "itsavinash0@gmail.com",

    to,

    subject,

    html,
  });
};

export default applyemail;