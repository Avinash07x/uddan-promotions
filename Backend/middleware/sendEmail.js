import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "itsavinash0@gmail.com",
    pass: "qefkufkfitxycqly",
  },
});

transporter.verify((err) => {
  if (err) console.log("❌ SMTP Error:", err.message);
  else console.log("✅ Gmail SMTP Ready");
});

const sendEmail = async ({ to, subject, html }) => {
  //  READ ENV HERE (runtime safe)
  const user = "itsavinash0@gmail.com";
  const pass = "qefkufkfitxycqly";

  if (!user || !pass) {
    throw new Error("EMAIL ENV NOT READY");
  }

  return transporter.sendMail({
    from: `"Uddan Promotions" <${user}>`,
    to,
    subject,
    html,
  });
};

export default sendEmail;