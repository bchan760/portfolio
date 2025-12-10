import sgmail from "@sendgrid/mail";

sgmail.setApiKey(process.env.SENDGRID_API_KEY);

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

    const name = req.body.name;
    const address = req.body.address;
    const message = req.body.message;

    console.log('Extracted name:', name);
    console.log('Extracted email:', address);
    console.log('Extracted message:', message);

    
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

    // email contents
    const emailContents = {
        from: process.env.MY_EMAIL,
        to: process.env.VERIFIED_SENDER_EMAIL,
        replyTo: address,  // This makes "Reply" go to them
        subject: `Portfolio Contact Form: ${name}`, 
        html: 
        `   <h3>New Contact Form Submission</h3>
            <p><strong>From:</strong> ${name} (${address})</p>
            <hr>
            <p>${message}</p>`
    };
    try {
        await sgmail.send(emailContents);
        
        return res.status(200).json({
            success: true,
            message: "Success!"
        });
    } catch (error){
        console.log("errorororororor");
        res.status(500).json({
            success: false,
            error: "Email failed to send."
        })
    };
};
