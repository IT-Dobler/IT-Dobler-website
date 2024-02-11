import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import * as sgMail from '@sendgrid/mail';

export async function SendEmail(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const response = await sgMail.send({
        from: 'dobler.it@gmail.com',
        to: 'dobler.it@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    })

    console.log(response);

    return { body: `Hello, ${name}!` };
}

app.http('SendEmail', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: SendEmail
});
