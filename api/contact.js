import { Resend } from "resend";

const resend = new Resend(process.env.RESENDAPIKEY);

// vercel needs this to parse json/req bodies
export const config = {
    api: {
        bodyParser: true,
    },
}

// vercel serverless handler for contact form
export default async function serverlessHandler(req, res) {
    console.log('Request method:', req.method);
    console.log('Request body:', req.body);
    console.log('Request body type:', Object.keys(req.body));

    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            error: "Wrong method."
        });
    }

    // console.log(req.body);

    const name = req.body.name;
    const address = req.body.email;
    const message = req.body.message;
    
    if (!name || !address || !message){
        console.log('Missing fields');
        return res.status(400).json({
            success: false,
            error: "All fields are required!",
            debug: {name, address, message}
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex) {
        return res.status(400).json({
            success: false,
            error: "Invalid email format."
        });
    }

    try {
        const emailContents = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.RECIPIENT_EMAIL,
            replyTo: address,
            subject: `New Submission from Portfolio: ${name}`, 
            html: 
            `   <h3>New Contact Form Submission</h3>
                <p><strong>From:</strong> ${name} (${address})</p>
                <hr>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        // console.log("Email has been sent: ", emailContents);
        
        return res.status(200).json({
            success: true,
            message: "Email sent successfully!"
        });
    } catch (error){
        // console.log("Resend API isn't working", error);
        // console.error("Error response:", error.response?.body);
        res.status(500).json({
            success: false,
            error: "Email failed to send.",
            details: error.message
        })
    };
};
