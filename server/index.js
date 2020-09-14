const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();
const app = express();


const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));


app.post('/send', (req, res) => {
    try {
    const mailOptions = {
    from: req.body.email,
    to: process.env.email,
    name: req.body.fullname,
    phone: req.body.phone,
    html: req.body.message
 };
    
    transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
        res.status(500).send({
        success: false,
        message: 'Something went wrong. Try again later'
    });
        } else {
        res.send({
        success: true,
        message: 'Thanks for contacting Gratia Bookings. We will get back to you shortly'
        });
        }
        });
      } catch (error) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      }
    });

app.listen(3030, () => {
  console.log('server start on port 3030');
});