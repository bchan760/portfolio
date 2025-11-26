import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
// import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

// mid ware
app.use(cors());
app.use(express.json());

// grab info from contact form
app.post('/api/contact', async (req, res) => {
    const {name, address, message} = req.body;
    //invalid input handling
    if (!name || !address || !message){
        return res.status(400).json({
            success: false,
            error: "All fields are required!"
        });
    }
    // use JS module good for emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAILADDRESS,
            pwd: process.env.EMAILPWD
        }
    }); 
    // email contents
    const mailContents = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,  // This makes "Reply" go to them
        subject: `Contact Form: ${name} (${email})`, 
        html: 
        `   <h3>New Contact Form Submission</h3>
            <p><strong>From:</strong> ${name} (${email})</p>
            <hr>
            <p>${message}</p>`
    };
    // finish this try catch block, then test
    try {
        await transporter.sendMail(mailContents);
        res.status(200).json({
            success: true
        });
    } catch (error){
        console.log("errorororororor");
    };
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);
