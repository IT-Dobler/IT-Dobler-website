import {app, HttpRequest, HttpResponseInit, InvocationContext} from "@azure/functions";

export async function SendEmail(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    const sgMail = require('@sendgrid/mail')

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const response = await sgMail.send({
        from: 'dobler.it@gmail.com',
        to: 'dobler.it@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    })

    return {body: `Hello, ${name}!, MailResponse: ${response}`};
}

app.http('SendEmail', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: SendEmail
});
