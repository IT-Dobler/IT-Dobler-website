import {app, HttpRequest, HttpResponseInit, InvocationContext} from "@azure/functions";

export async function SendEmail(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const body = await request.json()

    const sgMail = require('@sendgrid/mail')

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        from: 'dobler.it@gmail.com',
        to: 'yanic.dobler@gmail.com',
        subject: `IT-Dobler: New Contact request from ${body['name']}`,
        text: `Name: ${body['name']}, email: ${body['email']}, phoneNumber: ${body['phoneNumber'] || '-'}, message: ${body['message'] || '-'}`,
    }

    await sgMail.send(msg);

    return;
}

app.http('SendEmail', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: SendEmail
});
