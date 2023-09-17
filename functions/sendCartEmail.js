const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  const { email, cart } = JSON.parse(event.body);

  const cartInfo = cart
    .map(
      (item) =>
        `Product: ${item.title}\nQuantity: ${item.quantity}\nPrice: $${(
          item.price * item.quantity
        ).toFixed(2)}\n`
    )
    .join("\n");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL, // Your email address
      pass: process.env.SMTP_PASSWORD, // Your email password
    },
  });

  const mailOptions = {
    from: process.env.SMTP_EMAIL, // Your email address
    to: "jaf.frotan@gmail.com",
    subject: "Shopping Cart Info",
    text: `Email: ${email}\n\nCart Info:\n${cartInfo}\nTotal: $${total.toFixed(
      2
    )}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "An error occurred" }),
    };
  }
};
