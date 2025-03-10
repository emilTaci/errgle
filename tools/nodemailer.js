const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function mailer(subject, to, from, name, link) {
  try {
    const result = await transporter.sendMail({
      subject: subject,
      to: to,
      from: from,
      html: `

      <div style="display: flex;  padding: 10px; align-items: center; justify-content: center;">
      <div  style=" margin-right: 20px; padding: 20px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
          <svg width="100" height="100" viewBox="0 0 196 319" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                  <path
                      d="M124.3 227C124.5 226.9 124.5 226.6 124.4 226.4C121.9 221.8 93.5 169 88.2 114.5C85.2 66.9 87.4 21.6 95.1 0.6C95.2 0.3 95 0 94.6 0C85.3 0.3 80 0.1 78.5 0C78.3 0 78.1 0.2 78 0.4C77.4 6.2 71.1 69.7 74.6 95.4C74.6 95.6 74.5 95.8 74.3 95.9C72.4 96.6 67.4 98.1 65.8 98.6C65.5 98.7 65.3 98.5 65.2 98.2C64.5 93.6 60.1 59.4 65.2 3.3C65.2 3 64.9 2.7 64.6 2.8C57.7 4.7 52.2 6.6 51 7C50.8 7.1 50.7 7.2 50.7 7.4C50.2 12.8 43.5 92.2 61.1 140.4C61.2 140.6 61.1 140.8 60.9 140.9C57.9 142.9 54.4 143.8 53.3 144C53.1 144 52.9 143.9 52.8 143.7C51.1 139.3 34.5 92.5 39 11.6C39 11.3 38.7 11 38.4 11.1C32.1 13.3 26.4 15.2 25.1 15.6C24.9 15.7 24.8 15.8 24.8 16C24.6 21.9 21.8 107.9 42.7 147.2C42.8 147.4 42.8 147.5 42.7 147.7C40.7 150.3 35.9 151.5 34.2 151.8C33.8 151.9 33.4 151.7 33.3 151.3C30.7 144.8 9.2 88.8 13.6 21.7C13.6 21.3 13.3 21.1 12.9 21.3L0.3 27.6C0.1 27.7 0 27.9 0 28C0 33 1.2 93.8 14.6 134.4C26.9 171.3 39.2 192.1 58 216.6C61.7 221.4 62.4 224.3 62.4 225.7C62.4 226.3 62 226.8 61.4 226.8L36.9 230C36.5 230 36.4 230.5 36.6 230.8C40.9 235.6 67.6 264.9 74.7 270.5C74.8 270.6 75 270.6 75.1 270.6C82.5 267.4 95.7 262.3 97.3 261.5C97.3 261.6 97.4 261.4 97.3 261.5C97.9 259.7 102.1 244.8 124.3 227Z"
                      fill="url(#paint0_linear)" />
                  <path
                      d="M138.8 248.5C138.8 248.5 168 296.2 195.3 314.9C195.7 315.2 196 315.7 195.9 316.2C194.8 326.5 142.7 293.8 133.6 288.3C124.2 282.7 97.3999 261.5 97.3999 261.5L138.8 248.5Z"
                      fill="#032565" />
                  <path d="M149.6 234.6L167.9 242.4V242.5L138.7 248.5L149.6 234.6Z" fill="#032565" />
              </g>
              <defs>
                  <linearGradient id="paint0_linear" x1="10.6193" y1="56.2754" x2="95.9098" y2="147.885"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#AF0931" />
                      <stop offset="0.760417" stop-color="#281250" />
                      <stop offset="1" stop-color="#032565" />
                  </linearGradient>
                  <clipPath id="clip0">
                      <rect width="195.8" height="318.2" fill="white" />
                  </clipPath>
              </defs>
          </svg>
          <h1 class="mt-1">
              <pre>E R R G L E</pre>
          </h1>
      </div>
      <div style="width: 60%; padding: 10px;">
          <p style="text-align:justify;"> <b>Hi ${name}</b></p>
          <p style="text-align:justify;">Thanks for using Errgle!</p>
          <p style="text-align:justify;">This automatic reply is just to let you know that we find out error from your site.</p>
          <p style="text-align:justify;">
              If you have a general question about using Errgle, you’re welcome to browse our
              <a href="${link}">website</a> for walkthroughs of all of our features and answers to frequently
              asked questions.
              If you have any additional information that you think will help us to assist you,
              please feel free to reply to this email.
          </p>
          <p style="text-align:justify;">We look forward to chatting soon!</p>
          <p style="text-align:justify;">Thanks.</p>
      </div>


  </div>`,
    });

    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
module.exports = mailer;

// mailer("ok","emil.taciyev@gmail.com", "gurbanli97@mail.ru", "men subjectem")
