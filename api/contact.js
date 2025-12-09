import sgmail from "@sendgrid/mail";

sgmail.setApiKey(process.env.SENDGRID_API_KEY);


// vercel serverless handler for contact form
export default async function serverlessHandler(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            error: "Wrong method."
        });
    }

    const {name, address, message} = req.body;

    if (!name || !address || !message){
        return res.status(400).json({
            success: false,
            error: "All fields are required!"
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex) {
        return res.status(400).json({
            success: false,
            error: "Invalid email format."
        });
    }

    // email contents
    const emailContents = {
        from: process.env.MY_EMAIL,
        to: process.env.VERIFIED_SENDER_EMAIL,
        replyTo: email,  // This makes "Reply" go to them
        subject: `Portfolio Contact Form: ${name}`, 
        html: 
        `   <h3>New Contact Form Submission</h3>
            <p><strong>From:</strong> ${name} (${email})</p>
            <hr>
            <p>${message}</p>`
    };
    try {
        await sgmail.send(emailContents);
        
        return res.status(200).json({
            success: true
        });
    } catch (error){
        console.log("errorororororor");
        res.status(500).json({
            success: false,
            error: "Email failed to send."
        })
    };
};

const PORT = process.env.PORT;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);
